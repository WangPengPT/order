import { env } from "../config/env"
import {pipeline, Tensor} from '@xenova/transformers'
import {docToString} from "../utils/docToString";

export interface KnowledgeItem {
    id: string
    vector: number[]
    text: string
}

export class Knowledge {
    private apiUrl: string
    private store: KnowledgeItem[] = []
    private embedder: any

    constructor() {
        this.apiUrl = env.restaurantApiUrl || "http://localhost:8000/api/restaurants"
    }

    // ====================== 公共方法 ======================

    /** 初始化：拉取数据，分块，生成向量并存储 */
    async init() {
        try {
            this.embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
            const res = await fetch(this.apiUrl)
            if (!res.ok) throw new Error(`API 请求失败: ${res.status} ${res.statusText}`)
            const data = await res.json()

            console.log("📚 API 数据获取成功:")

            for (const doc of data.data) {
                if (doc.visible) {
                    const text = docToString(doc)  // 完整信息
                    const vector = await this.embed(text)
                    this.addVector(doc.id, vector, text)
                }
            }

            console.log("📚 知识库初始化完成，总条数:", this.store.length)
        } catch (err) {
            console.error("Knowledge init 失败:", err)
        }
    }

    /** 查询 topK 文本 */
    async query(userInput: string, topK = 3): Promise<string> {
        const queryVector = await this.embed(userInput)
        const topChunks = this.search(queryVector, topK)
        const uniqueTexts = Array.from(new Set(topChunks.map(c => c.text)))
        return uniqueTexts.join('\n')
    }

    /** 获取全部向量记录（只读） */
    getAll(): KnowledgeItem[] {
        return [...this.store]
    }

    // ====================== 内部方法 ======================

    /** 分块文本 */
    private chunkText(text: string, size = 200): string[] {
        const chunks: string[] = []
        let start = 0
        while (start < text.length) {
            chunks.push(text.slice(start, start + size))
            start += size
        }
        return chunks
    }

    /** 调用 embedding API */
    async embed(text: string): Promise<number[]> {
        if (!this.embedder) throw new Error('Embedder 未初始化')

        const output = await this.embedder(text)  // output: Tensor 或 number[][]

        // 如果是 Tensor，转成 number[]
        if (output instanceof Tensor) {
            return Array.from(output.data)  // 直接取 Float32Array 转成 number[]
        }

        // 如果是二维数组 [1, dim]
        if (Array.isArray(output) && Array.isArray(output[0])) {
            return output[0] as number[]
        }

        // 如果已经是一维数组
        return output as number[]
    }

    /** 添加向量到本地 store */
    private addVector(id: string, vector: number[], text: string) {
        this.store.push({ id, vector, text })
    }

    /** 向量检索（余弦相似度） */
    private search(queryVector: number[], topK = 3): KnowledgeItem[] {
        const scored = this.store.map(item => ({
            ...item,
            score: this.cosineSimilarity(queryVector, item.vector)
        }))
        return scored.sort((a, b) => b.score - a.score).slice(0, topK)
    }

    /** 余弦相似度计算 */
    private cosineSimilarity(a: number[], b: number[]): number {
        if (!Array.isArray(a) || !Array.isArray(b)) {
            console.warn("cosineSimilarity 输入不是数组", a, b)
            return 0
        }
        const dot = a.reduce((sum, v, i) => sum + v * (b[i] || 0), 0)
        const normA = Math.sqrt(a.reduce((sum, v) => sum + v * v, 0))
        const normB = Math.sqrt(b.reduce((sum, v) => sum + v * v, 0))
        return normA && normB ? dot / (normA * normB) : 0
    }
}
