"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const env_1 = require("./config/env");
const openAi_client_1 = require("./llm/client/openAi.client");
const http_1 = require("http");
const MemoryStore_1 = require("./core/memory/MemoryStore");
const Knowledge_1 = require("./knowledge/Knowledge");
const api_center_1 = require("./api/api.center");
const MongoDB_1 = require("./dataDase/MongoDB");
const AgentConfigDB_1 = require("./dataDase/AgentConfigDB");
const agentConfig_1 = require("./core/agent/agentConfig");
const ConversationManager_1 = require("./core/conversation/ConversationManager");
// 全局实例
let mongoDB;
let agentDB;
let agentConfig;
let conversationManager;
// 初始化数据库
async function initDatabase() {
    mongoDB = new MongoDB_1.MongoDB();
    await mongoDB.connect();
    agentDB = new AgentConfigDB_1.AgentDB(mongoDB);
    console.log('✅ 数据库初始化完成');
}
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
    exposedHeaders: ['Content-Disposition'],
    methods: ["GET", "POST"]
}));
const port = env_1.env.port;
//main().catch(console.error);
server.listen(port, async () => {
    console.info(`Server running on http://localhost:${port}`);
    await initApp();
});
async function initApp() {
    try {
        await initDatabase();
        const agentStateData = await agentDB.getDefaultAgentState() ?? agentConfig_1.AgentConfig.defaultConfig();
        agentConfig = new agentConfig_1.AgentConfig(agentStateData, agentDB);
        conversationManager = new ConversationManager_1.ConversationManager(new MemoryStore_1.MemoryStore(), new openAi_client_1.OpenAiClient(agentConfig.model), new Knowledge_1.Knowledge(), agentConfig);
        app.use("/api", (0, api_center_1.createApiRouter)(agentConfig, conversationManager));
    }
    catch (error) {
        console.error("Init app error: ", error);
    }
}
async function quitApplication() {
    try {
        await agentDB.saveDefaultAgentState(agentConfig);
    }
    catch (error) {
        console.error("Quit app error: ", error);
    }
    finally {
        process.exit(0);
    }
}
// 捕获关闭信号时保存数据
process.on("SIGINT", async () => {
    await quitApplication();
});
process.on("SIGTERM", async () => {
    await quitApplication();
});
process.on('uncaughtException', async (err) => {
    console.error('❌ 未捕获异常:', err);
    await quitApplication();
});
process.on('unhandledRejection', async (reason) => {
    console.error('❌ 未处理的 Promise 拒绝:', reason);
    await quitApplication();
});
//
// async function main() {
//
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
//     const memory = new MemoryStore()
//     const chat = new OpenAiClient()
//     const knowledge = new Knowledge()
//     await knowledge.init()
//     await chat.init()
//
//     const ask = async () => {
//         rl.question("你: ", async (input) => {
//                 if (["exit", "quit"].includes(input.toLowerCase())) {
//                     rl.close();
//                     return;
//                 }
//
//                 process.stdout.write("AI: ");
//
//                 try {
//                     const agentConfigValue = AgentConfig.defaultConfig()
//
//                     const agent = new AgentConfig(agentConfigValue);
//                     const controller = new ConversationController(memory, chat, 0, agent,knowledge)
//
//                     for await (const chunk of controller.handleUserInput(input)) {
//                         process.stdout.write(chunk)
//                     }
//
//                 } catch
//                     (err) {
//                     console.error(err);
//                 }
//
//                 console.log(); // 回复结束换行
//                 ask(); // 递归下一次问
//             }
//         )
//         ;
//     };
//
//     ask(); // ⚠️ 一定要启动第一次 ask()
//
// }
//# sourceMappingURL=main.js.map