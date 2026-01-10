import { LLMClient, LLMGenerateOptions, LLMMessage } from "./llm.interface";
import { AgentModel } from "../../core/agent/agent.type";
export declare class OpenAiClient implements LLMClient {
    modelName: string;
    baseURL: string;
    private model;
    constructor(agentModel?: AgentModel);
    init(): Promise<void>;
    generate(messages: LLMMessage[], options?: LLMGenerateOptions): Promise<string>;
    generateStream(messages: LLMMessage[], options?: LLMGenerateOptions): AsyncGenerator<string>;
}
//# sourceMappingURL=openAi.client.d.ts.map