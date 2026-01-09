"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAgentRouter = createAgentRouter;
const express_1 = __importDefault(require("express"));
function createAgentRouter(agentConfig) {
    const router = express_1.default.Router();
    router.get("/system_prompt", async (req, res) => {
        try {
            console.info("获取 system prompt...");
            const prompt = agentConfig.getSystemPrompt();
            res.json({ success: true, data: prompt });
        }
        catch (error) {
            console.error("Get system_prompt error", error);
            res.status(500);
        }
        finally {
            res.end();
        }
    });
    router.patch("/system_prompt", async (req, res) => {
        try {
            console.info("修改 system prompt...");
            const updates = req.body;
            agentConfig.updateSystemPrompt(updates);
            res.json({ success: true, data: agentConfig.getSystemPrompt() });
        }
        catch (error) {
            res.status(500).json({ error: "更新失败" });
        }
    });
    router.get("/model", async (req, res) => {
        try {
            console.info("获取 model");
            const model = agentConfig.getModel();
            res.json({ success: true, data: model });
        }
        catch (error) {
            console.error("Get model error", error);
            res.status(500);
        }
        finally {
            res.end();
        }
    });
    router.post("/model", async (req, res) => {
        try {
            console.info("修改 model");
            const updates = req.body;
            agentConfig.updateModel(updates);
            const model = agentConfig.getModel();
            res.json({ success: true, data: model });
        }
        catch (error) {
            console.error("Get model error", error);
            res.status(500);
        }
        finally {
            res.end();
        }
    });
    return router;
}
//# sourceMappingURL=api.agent.js.map