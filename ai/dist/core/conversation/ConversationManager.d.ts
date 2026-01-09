import { ConversationSession } from "./conversation.types";
import { MemoryStore } from "../memory/MemoryStore";
import { OpenAiClient } from "../../llm/client/openAi.client";
import { Knowledge } from "../../knowledge/Knowledge";
import { ConversationController } from "./ConversationController";
import { AgentConfig } from "../agent/agentConfig";
export declare class ConversationManager {
    private memoryFactory;
    private llmFactory;
    private knowledgeFactory;
    private agentConfig;
    private sessionTimeoutMs;
    private sessions;
    constructor(memoryFactory: MemoryStore, llmFactory: OpenAiClient, knowledgeFactory: Knowledge, agentConfig: AgentConfig, sessionTimeoutMs?: number);
    init(): Promise<void>;
    getOrCreateSession(sessionId: string): Promise<ConversationController>;
    private cleanupExpiredSessions;
    getActiveSessions(): ConversationSession[];
    endSession(sessionId: string): boolean;
    getSessionInfo(sessionId: string): ConversationSession | null;
}
//# sourceMappingURL=ConversationManager.d.ts.map