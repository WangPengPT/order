import express, { Request, Response } from 'express';
import cors from 'cors';
import {env} from "./config/env";
import {OpenAiClient} from "./llm/client/openAi.client";
import { createServer } from 'http';
import {MemoryStore} from "./core/memory/MemoryStore";
import {Knowledge} from "./knowledge/Knowledge";
import {createApiRouter} from "./api/api.center";
import {AgentDB} from "./dataDase/AgentConfigDB";
import {AgentConfig} from "./core/agent/agentConfig";
import {ConversationManager} from "./core/conversation/ConversationManager";
import {MongoDatabase} from "./dataDase/MongoDatabase";

// 全局实例
let mongoDB: MongoDatabase;
let agentDB: AgentDB;
let agentConfig: AgentConfig;
let conversationManager: ConversationManager;

// 初始化数据库
async function initDatabase() {
    mongoDB = new MongoDatabase();
    await mongoDB.connect();
    agentDB = new AgentDB(mongoDB);

    console.log('✅ 数据库初始化完成');
}

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(cors({
    origin: '*',
    exposedHeaders: ['Content-Disposition'],
    methods: ["GET", "POST"]
}));

const port = env.port

//main().catch(console.error);

server.listen(port, async () => {

    console.info(`Server running on http://localhost:${port}`);
    await initApp()
});

async function initApp() {
    try {
        await initDatabase();

        const agentStateData = await agentDB.getDefaultAgentState() ?? AgentConfig.defaultConfig()

        agentConfig = new AgentConfig(agentStateData, agentDB);

        conversationManager = new ConversationManager(new MemoryStore(), new OpenAiClient(agentConfig.model), new Knowledge(), agentConfig);

        app.use("/api", createApiRouter(agentConfig, conversationManager));
    } catch (error) {
        console.error("Init app error: ", error)
    }
}

async function quitApplication() {
    try {
        await agentDB.saveDefaultAgentState(agentConfig)

    } catch (error) {
        console.error("Quit app error: ", error)
    } finally {
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

