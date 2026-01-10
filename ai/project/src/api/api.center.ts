import express from "express";

import {createChatRouter} from './api.chat'
import {createAgentRouter} from './api.agent'
import {AgentConfig} from "../core/agent/agentConfig";
import {ConversationManager} from "../core/conversation/ConversationManager";


export function createApiRouter(agentConfig: AgentConfig, conversationManager: ConversationManager) {
    const router = express.Router();

    router.use("/chat", createChatRouter(conversationManager));

    router.use("/agent", createAgentRouter(agentConfig));

    return router;
}
