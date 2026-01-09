"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiRouter = createApiRouter;
const express_1 = __importDefault(require("express"));
const api_chat_1 = require("./api.chat");
const api_agent_1 = require("./api.agent");
function createApiRouter(agentConfig, conversationManager) {
    const router = express_1.default.Router();
    router.use("/chat", (0, api_chat_1.createChatRouter)(conversationManager));
    router.use("/agent", (0, api_agent_1.createAgentRouter)(agentConfig));
    return router;
}
//# sourceMappingURL=api.center.js.map