export interface KnowledgeItem {
    id: string;
    vector: number[];
    text: string;
}
export declare class Knowledge {
    private apiUrl;
    private store;
    private embedder;
    constructor();
    /** 初始化：拉取数据，分块，生成向量并存储 */
    init(): Promise<void>;
    /** 查询 topK 文本 */
    query(userInput: string, topK?: number): Promise<string>;
    /** 获取全部向量记录（只读） */
    getAll(): KnowledgeItem[];
    /** 分块文本 */
    private chunkText;
    /** 调用 embedding API */
    embed(text: string): Promise<number[]>;
    /** 添加向量到本地 store */
    private addVector;
    /** 向量检索（余弦相似度） */
    private search;
    /** 余弦相似度计算 */
    private cosineSimilarity;
}
//# sourceMappingURL=Knowledge.d.ts.map