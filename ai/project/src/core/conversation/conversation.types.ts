import {ConversationController} from "./ConversationController";

export interface ConversationSession {
    id: string;
    controller: ConversationController;
    createdAt: Date;
    lastActivity: Date;
    metadata?: Record<string, any>;
}