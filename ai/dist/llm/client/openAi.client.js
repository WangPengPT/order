"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAiClient = void 0;
const langchain_1 = require("langchain");
const env_1 = require("../../config/env");
const openai_1 = require("@langchain/openai");
class OpenAiClient {
    modelName;
    baseURL;
    model;
    constructor(agentModel = { name: "gpt-5-nano", baseURL: "https://api.openai.com/v1" }) {
        this.modelName = agentModel.name;
        this.baseURL = agentModel.baseURL;
    }
    async init() {
        let apikey;
        if (this.modelName.toLowerCase().includes("deepseek")) {
            apikey = env_1.env.deepseekApikey;
        }
        else {
            apikey = env_1.env.apiKey;
        }
        process.env.OPENAI_API_KEY = apikey;
        this.model = new openai_1.ChatOpenAI({
            model: this.modelName,
            temperature: 1,
            configuration: {
                baseURL: this.baseURL,
            }
        });
    }
    //==============Public
    async generate(messages, options = {}) {
        const formattedMessages = messages.map(msg => {
            switch (msg.role) {
                case 'system':
                    return new langchain_1.SystemMessage(msg.content);
                case 'user':
                    return new langchain_1.HumanMessage(msg.content);
                default:
                    throw new Error(`Unsupported role: ${msg.role}`);
            }
        });
        const response = await this.model.invoke(formattedMessages, options);
        return response.content;
    }
    async *generateStream(messages, options = {}) {
        if (!this.model)
            await this.init();
        const formattedMessages = messages.map(msg => {
            switch (msg.role) {
                case 'system':
                    return new langchain_1.SystemMessage(msg.content);
                case 'user':
                    return new langchain_1.HumanMessage(msg.content);
                case 'assistant':
                    return new langchain_1.AIMessage(msg.content);
                default:
                    throw new Error(`Unsupported role: ${msg.role}`);
            }
        });
        const stream = await this.model.stream(formattedMessages);
        for await (const chunk of stream) {
            yield chunk.text;
        }
    }
}
exports.OpenAiClient = OpenAiClient;
//# sourceMappingURL=openAi.client.js.map