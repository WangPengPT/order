"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knowledge = void 0;
const env_1 = require("../config/env");
const transformers_1 = require("@xenova/transformers");
const docToString_1 = require("../utils/docToString");
class Knowledge {
    apiUrl;
    store = [];
    embedder;
    constructor() {
        this.apiUrl = env_1.env.restaurantApiUrl || "http://localhost:8000/api/restaurants";
    }
    // ====================== 公共方法 ======================
    /** 初始化：拉取数据，分块，生成向量并存储 */
    async init() {
        try {
            this.embedder = await (0, transformers_1.pipeline)('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
            const res = await fetch(this.apiUrl);
            if (!res.ok)
                throw new Error(`API 请求失败: ${res.status} ${res.statusText}`);
            const data = await res.json();
            console.log("📚 API 数据获取成功:");
            for (const doc of data.data) {
                if (doc.visible) {
                    const text = (0, docToString_1.docToString)(doc); // 完整信息
                    const vector = await this.embed(text);
                    this.addVector(doc.id, vector, text);
                }
            }
            console.log("📚 知识库初始化完成，总条数:", this.store.length);
        }
        catch (err) {
            console.error("Knowledge init 失败:", err);
        }
    }
    /** 查询 topK 文本 */
    async query(userInput, topK = 3) {
        const queryVector = await this.embed(userInput);
        const topChunks = this.search(queryVector, topK);
        const uniqueTexts = Array.from(new Set(topChunks.map(c => c.text)));
        return uniqueTexts.join('\n');
    }
    /** 获取全部向量记录（只读） */
    getAll() {
        return [...this.store];
    }
    // ====================== 内部方法 ======================
    /** 分块文本 */
    chunkText(text, size = 200) {
        const chunks = [];
        let start = 0;
        while (start < text.length) {
            chunks.push(text.slice(start, start + size));
            start += size;
        }
        return chunks;
    }
    /** 调用 embedding API */
    async embed(text) {
        if (!this.embedder)
            throw new Error('Embedder 未初始化');
        const output = await this.embedder(text); // output: Tensor 或 number[][]
        // 如果是 Tensor，转成 number[]
        if (output instanceof transformers_1.Tensor) {
            return Array.from(output.data); // 直接取 Float32Array 转成 number[]
        }
        // 如果是二维数组 [1, dim]
        if (Array.isArray(output) && Array.isArray(output[0])) {
            return output[0];
        }
        // 如果已经是一维数组
        return output;
    }
    /** 添加向量到本地 store */
    addVector(id, vector, text) {
        this.store.push({ id, vector, text });
    }
    /** 向量检索（余弦相似度） */
    search(queryVector, topK = 3) {
        const scored = this.store.map(item => ({
            ...item,
            score: this.cosineSimilarity(queryVector, item.vector)
        }));
        return scored.sort((a, b) => b.score - a.score).slice(0, topK);
    }
    /** 余弦相似度计算 */
    cosineSimilarity(a, b) {
        if (!Array.isArray(a) || !Array.isArray(b)) {
            console.warn("cosineSimilarity 输入不是数组", a, b);
            return 0;
        }
        const dot = a.reduce((sum, v, i) => sum + v * (b[i] || 0), 0);
        const normA = Math.sqrt(a.reduce((sum, v) => sum + v * v, 0));
        const normB = Math.sqrt(b.reduce((sum, v) => sum + v * v, 0));
        return normA && normB ? dot / (normA * normB) : 0;
    }
}
exports.Knowledge = Knowledge;
//# sourceMappingURL=Knowledge.js.map