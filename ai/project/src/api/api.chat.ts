import express from "express";
import {ConversationManager} from "../core/conversation/ConversationManager";

export function createChatRouter(conversationManager: ConversationManager) {

    const router = express.Router();

    router.post("/", async (req, res) => {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.setHeader("Transfer-Encoding", "chunked");

        const {message, userId} = req.body;

        if (!message || !userId) {
            return res.status(400).send("userId and message are required");
        }

        console.log("用户开启对话: ", userId);
        console.log("对话内容: ", message);

        // 获取或创建用户会话
        const conversationController = await conversationManager.getOrCreateSession(userId);

        try {
            for await (const chunk of conversationController.handleUserInput(message)) {
                res.write(chunk); // 流式输出
            }
        } catch (err) {
            console.error("聊天出错:", err);
            res.write("\n[系统错误]");
        }

        res.end();
    });
    return router;
}