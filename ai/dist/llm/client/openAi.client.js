"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAiClient = void 0;
const langchain_1 = require("langchain");
class OpenAiClient {
    modelName;
    model;
    constructor(modelName = "gpt-5-nano") {
        this.modelName = modelName;
    }
    async init() {
        this.model = await (0, langchain_1.initChatModel)(this.modelName);
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