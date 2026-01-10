import {ConversationSession} from "./conversation.types";
import {MemoryStore} from "../memory/MemoryStore";
import {OpenAiClient} from "../../llm/client/openAi.client";
import {Knowledge} from "../../knowledge/Knowledge";
import {ConversationController} from "./ConversationController";
import {AgentConfig} from "../agent/agentConfig";

export class ConversationManager {
    private sessions = new Map<string, ConversationSession>();

    constructor(
        private memoryFactory: MemoryStore,
        private llmFactory: OpenAiClient,
        private knowledgeFactory: Knowledge,
        private agentConfig: AgentConfig,
        private sessionTimeoutMs: number = 60 * 60 * 1000, // 60分钟
    ) {
        this.init()
    }

    async init() {
        await this.knowledgeFactory.init()
    }

    // 获取或创建会话
    async getOrCreateSession(sessionId: string): Promise<ConversationController> {
        let session = this.sessions.get(sessionId);

        // 清理过期会话
        this.cleanupExpiredSessions();

        if (!session) {
            // 创建新会话
            const memory = this.memoryFactory;
            const llm = this.llmFactory;
            const knowledge = this.knowledgeFactory;
            await llm.init()
            const controller = new ConversationController(
                memory,
                llm,
                0,
                this.agentConfig,
                knowledge
            );

            session = {
                id: sessionId,
                controller,
                createdAt: new Date(),
                lastActivity: new Date()
            };

            this.sessions.set(sessionId, session);
        } else {
            // 更新最后活动时间
            session.lastActivity = new Date();
        }

        return session.controller;
    }

    // 清理过期会话
    private cleanupExpiredSessions(): void {
        const now = Date.now();
        for (const [sessionId, session] of this.sessions.entries()) {
            const lastActivityTime = session.lastActivity.getTime();
            if (now - lastActivityTime > this.sessionTimeoutMs) {
                this.sessions.delete(sessionId);
            }
        }
    }

    // 获取所有活跃会话
    getActiveSessions(): ConversationSession[] {
        this.cleanupExpiredSessions();
        return Array.from(this.sessions.values());
    }

    // 结束会话
    endSession(sessionId: string): boolean {
        return this.sessions.delete(sessionId);
    }

    // 获取会话信息
    getSessionInfo(sessionId: string): ConversationSession | null {
        return this.sessions.get(sessionId) || null;
    }
}
