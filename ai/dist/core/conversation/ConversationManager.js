"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationManager = void 0;
const ConversationController_1 = require("./ConversationController");
class ConversationManager {
    memoryFactory;
    llmFactory;
    knowledgeFactory;
    agentConfig;
    sessionTimeoutMs;
    sessions = new Map();
    constructor(memoryFactory, llmFactory, knowledgeFactory, agentConfig, sessionTimeoutMs = 60 * 60 * 1000) {
        this.memoryFactory = memoryFactory;
        this.llmFactory = llmFactory;
        this.knowledgeFactory = knowledgeFactory;
        this.agentConfig = agentConfig;
        this.sessionTimeoutMs = sessionTimeoutMs;
        this.init();
    }
    async init() {
        await this.knowledgeFactory.init();
    }
    // 获取或创建会话
    async getOrCreateSession(sessionId) {
        let session = this.sessions.get(sessionId);
        // 清理过期会话
        this.cleanupExpiredSessions();
        if (!session) {
            // 创建新会话
            const memory = this.memoryFactory;
            const llm = this.llmFactory;
            const knowledge = this.knowledgeFactory;
            await llm.init();
            const controller = new ConversationController_1.ConversationController(memory, llm, 0, this.agentConfig, knowledge);
            session = {
                id: sessionId,
                controller,
                createdAt: new Date(),
                lastActivity: new Date()
            };
            this.sessions.set(sessionId, session);
        }
        else {
            // 更新最后活动时间
            session.lastActivity = new Date();
        }
        return session.controller;
    }
    // 清理过期会话
    cleanupExpiredSessions() {
        const now = Date.now();
        for (const [sessionId, session] of this.sessions.entries()) {
            const lastActivityTime = session.lastActivity.getTime();
            if (now - lastActivityTime > this.sessionTimeoutMs) {
                this.sessions.delete(sessionId);
            }
        }
    }
    // 获取所有活跃会话
    getActiveSessions() {
        this.cleanupExpiredSessions();
        return Array.from(this.sessions.values());
    }
    // 结束会话
    endSession(sessionId) {
        return this.sessions.delete(sessionId);
    }
    // 获取会话信息
    getSessionInfo(sessionId) {
        return this.sessions.get(sessionId) || null;
    }
}
exports.ConversationManager = ConversationManager;
//# sourceMappingURL=ConversationManager.js.map