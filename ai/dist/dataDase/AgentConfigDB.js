"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentDB = void 0;
class AgentDB {
    mongoDB;
    collection;
    DEFAULT_ID = 'default_agent';
    constructor(mongoDB) {
        this.mongoDB = mongoDB;
        this.collection = mongoDB.getDatabase().collection('agent_configs');
    }
    // 保存 AgentState（使用自定义 defaultId）
    async saveAgentState(agentState, name, defaultId = this.DEFAULT_ID) {
        try {
            // 先检查是否已存在相同 defaultId 的文档
            const existing = await this.collection.findOne({ defaultId });
            if (existing) {
                // 如果已存在，则更新
                const result = await this.collection.updateOne({ defaultId }, {
                    $set: {
                        ...agentState,
                        name,
                        updatedAt: new Date()
                    }
                });
                console.log(`✅ AgentState 更新成功: ${defaultId}`);
                return result.modifiedCount > 0;
            }
            else {
                // 如果不存在，则插入
                const doc = {
                    ...agentState,
                    name,
                    defaultId,
                    createdAt: new Date(),
                    updatedAt: new Date()
                };
                const result = await this.collection.insertOne(doc);
                console.log(`✅ AgentState 保存成功: ${defaultId}`);
                return result.insertedId !== null;
            }
        }
        catch (error) {
            console.error('❌ 保存/更新 AgentState 失败:', error);
            return false;
        }
    }
    // 读取 AgentState（使用自定义 defaultId）
    async getAgentState(defaultId = this.DEFAULT_ID) {
        try {
            const doc = await this.collection.findOne({ defaultId });
            if (!doc)
                return null;
            // 只返回 AgentState 部分
            const { _id, name, defaultId: idField, createdAt, updatedAt, ...agentState } = doc;
            return agentState;
        }
        catch (error) {
            console.error('❌ 读取 AgentState 失败:', error);
            return null;
        }
    }
    // 通过名称获取最新的 AgentState
    async getLatestAgentStateByName(name) {
        try {
            const doc = await this.collection
                .find({ name })
                .sort({ createdAt: -1 })
                .limit(1)
                .next();
            if (!doc)
                return null;
            const { _id, name: docName, defaultId, createdAt, updatedAt, ...agentState } = doc;
            return agentState;
        }
        catch (error) {
            console.error('❌ 通过名称读取失败:', error);
            return null;
        }
    }
    // 更新 AgentState（使用自定义 defaultId）
    async updateAgentState(defaultId = this.DEFAULT_ID, updates) {
        try {
            const result = await this.collection.updateOne({ defaultId }, {
                $set: {
                    ...updates,
                    updatedAt: new Date()
                }
            });
            const success = result.modifiedCount > 0;
            if (success) {
                console.log(`✅ AgentState 更新成功: ${defaultId}`);
            }
            else {
                console.log(`⚠️  AgentState 未找到: ${defaultId}`);
            }
            return success;
        }
        catch (error) {
            console.error('❌ 更新 AgentState 失败:', error);
            return false;
        }
    }
    // 删除 AgentState（使用自定义 defaultId）
    async deleteAgentState(defaultId = this.DEFAULT_ID) {
        try {
            const result = await this.collection.deleteOne({ defaultId });
            const success = result.deletedCount > 0;
            if (success) {
                console.log(`✅ AgentState 删除成功: ${defaultId}`);
            }
            else {
                console.log(`⚠️  AgentState 未找到: ${defaultId}`);
            }
            return success;
        }
        catch (error) {
            console.error('❌ 删除 AgentState 失败:', error);
            return false;
        }
    }
    // 获取所有 AgentState
    async getAllAgentStates(limit = 100) {
        try {
            const docs = await this.collection
                .find({})
                .sort({ createdAt: -1 })
                .limit(limit)
                .toArray();
            return docs.map(doc => ({
                defaultId: doc.defaultId || 'unknown',
                name: doc.name || 'unnamed',
                agentState: {
                    model: doc.model,
                    systemPrompt: doc.systemPrompt,
                    // 确保包含所有 AgentState 字段
                    ...doc
                },
                createdAt: doc.createdAt
            }));
        }
        catch (error) {
            console.error('❌ 获取所有 AgentState 失败:', error);
            return [];
        }
    }
    // 便捷方法：保存默认AgentState
    async saveDefaultAgentState(agentState) {
        return this.saveAgentState(agentState, 'default', this.DEFAULT_ID);
    }
    // 便捷方法：获取默认AgentState
    async getDefaultAgentState() {
        return this.getAgentState(this.DEFAULT_ID);
    }
    // 便捷方法：更新默认AgentState
    async updateDefaultAgentState(updates) {
        return this.updateAgentState(this.DEFAULT_ID, updates);
    }
    // 便捷方法：删除默认AgentState
    async deleteDefaultAgentState() {
        return this.deleteAgentState(this.DEFAULT_ID);
    }
}
exports.AgentDB = AgentDB;
//# sourceMappingURL=AgentConfigDB.js.map