"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDB = void 0;
const mongodb_1 = require("mongodb");
const env_1 = require("../config/env");
class MongoDB {
    connectionString;
    dbName;
    client = null;
    db = null;
    constructor(connectionString = env_1.env.mongoDbUrl || 'mongodb://localhost:27017', dbName = 'ai_agents') {
        this.connectionString = connectionString;
        this.dbName = dbName;
    }
    // 连接数据库
    async connect() {
        try {
            this.client = new mongodb_1.MongoClient(this.connectionString);
            await this.client.connect();
            this.db = this.client.db(this.dbName);
            console.log(`✅ MongoDB 连接成功: ${this.dbName}`);
        }
        catch (error) {
            console.error('❌ MongoDB 连接失败:', error);
            throw error;
        }
    }
    // 断开连接
    async disconnect() {
        if (this.client) {
            await this.client.close();
            this.client = null;
            this.db = null;
            console.log('✅ MongoDB 断开连接');
        }
    }
    // 获取数据库实例
    getDatabase() {
        if (!this.db) {
            throw new Error('数据库未连接，请先调用 connect() 方法');
        }
        return this.db;
    }
    // 检查连接状态
    isConnected() {
        return this.client !== null && this.db !== null;
    }
}
exports.MongoDB = MongoDB;
//# sourceMappingURL=MongoDB.js.map