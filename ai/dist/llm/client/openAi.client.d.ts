import { LLMClient, LLMGenerateOptions, LLMMessage } from "./llm.interface";
export declare class OpenAiClient implements LLMClient {
    modelName: string;
    private model;
    constructor(modelName?: string);
    init(): Promise<void>;
    generate(messages: LLMMessage[], options?: LLMGenerateOptions): Promise<string>;
    generateStream(messages: LLMMessage[], options?: LLMGenerateOptions): AsyncGenerator<string>;
}
//# sourceMappingURL=openAi.client.d.ts.map