import {LLMClient, LLMGenerateOptions, LLMMessage} from "./llm.interface";
import {AIMessage, HumanMessage, SystemMessage} from "langchain";
import {env} from "../../config/env";
import {ChatOpenAI} from "@langchain/openai";
import {AgentModel} from "../../core/agent/agent.type";

export class OpenAiClient implements LLMClient {
    modelName: string
    baseURL: string;
    private model: any

    constructor(agentModel: AgentModel = {name: "gpt-5-nano",baseURL: "https://api.openai.com/v1" }) {
        this.modelName = agentModel.name
        this.baseURL = agentModel.baseURL
    }

    async init() {

        let apikey: string;

        if (this.modelName.toLowerCase().includes("deepseek")) {
            apikey = env.deepseekApikey
        } else {
            apikey = env.apiKey
        }
        process.env.OPENAI_API_KEY = apikey
        this.model = new ChatOpenAI({
            model: this.modelName,
            temperature: 1,
            configuration: {
                baseURL: this.baseURL,
            }
        })
    }

    //==============Public

    async generate(
        messages: LLMMessage[],
        options: LLMGenerateOptions = {}
    ): Promise<string> {
        const formattedMessages = messages.map(msg => {
            switch (msg.role) {
                case 'system':
                    return new SystemMessage(msg.content)
                case 'user':
                    return new HumanMessage(msg.content)
                default:
                    throw new Error(`Unsupported role: ${msg.role}`)
            }
        })
        const response = await this.model.invoke(formattedMessages, options)
        return response.content
    }

    async *generateStream(
        messages: LLMMessage[],
        options: LLMGenerateOptions = {}
    ): AsyncGenerator<string> {
        if (!this.model) await this.init();

        const formattedMessages = messages.map(msg => {
            switch (msg.role) {
                case 'system':
                    return new SystemMessage(msg.content);
                case 'user':
                    return new HumanMessage(msg.content);
               case 'assistant':
                   return new AIMessage(msg.content);
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