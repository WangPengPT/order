import { MemoryStore } from "../memory/MemoryStore";
import { OpenAiClient } from "../../llm/client/openAi.client";
import { Knowledge } from "../../knowledge/Knowledge";
import { AgentConfig } from "../agent/agentConfig";
export declare class ConversationController {
    private memory;
    private llm;
    private count;
    private agentConfig;
    knowledge: Knowledge;
    constructor(memory: MemoryStore, llm: OpenAiClient, count: number | undefined, agentConfig: AgentConfig, knowledge: Knowledge);
    handleUserInput(input: string): AsyncGenerator<string, void, unknown>;
}
//# sourceMappingURL=ConversationController.d.ts.map