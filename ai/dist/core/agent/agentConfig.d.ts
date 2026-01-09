import { AgentModel, AgentState, SystemPrompt } from "./agent.type";
import { AgentDB } from "../../dataDase/AgentConfigDB";
export declare class AgentConfig implements AgentState {
    model: AgentModel;
    systemPrompt: SystemPrompt;
    constructor(state: AgentState, agentDB: AgentDB);
    getModel(): Readonly<AgentModel>;
    updateModel(partial: Partial<AgentModel>): void;
    getSystemPrompt(): Readonly<SystemPrompt>;
    updateSystemPrompt(partial: Partial<SystemPrompt>): void;
    private formatProcedure;
    private formatInline;
    buildSystemPrompt(): string;
    static defaultConfig(): AgentState;
}
//# sourceMappingURL=agentConfig.d.ts.map