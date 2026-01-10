import { MongoClient, Db } from 'mongodb';
import {env} from "../config/env";

export class MongoDatabase {
    private client: MongoClient | null = null;
    private db: Db | null = null;

    constructor(
        private connectionString: string = env.mongoDbUrl || 'mongodb://localhost:27017',
        private dbName: string = 'ai_agents'
    ) {}

    // 连接数据库
    async connect(): Promise<void> {
        try {
            this.client = new MongoClient(this.connectionString);
            await this.client.connect();
            this.db = this.client.db(this.dbName);
            console.log(`✅ MongoDB 连接成功: ${this.dbName}`);
        } catch (error) {
            console.error('❌ MongoDatabase 连接失败:', error);
            throw error;
        }
    }

    // 断开连接
    async disconnect(): Promise<void> {
        if (this.client) {
            await this.client.close();
            this.client = null;
            this.db = null;
            console.log('✅ MongoDatabase 断开连接');
        }
    }

    // 获取数据库实例
    getDatabase(): Db {
        if (!this.db) {
            throw new Error('数据库未连接，请先调用 connect() 方法');
        }
        return this.db;
    }

    // 检查连接状态
    isConnected(): boolean {
        return this.client !== null && this.db !== null;
    }
}