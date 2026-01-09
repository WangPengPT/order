import { MongoDB } from './MongoDB';
import { AgentState } from "../core/agent/agent.type";
export declare class AgentDB {
    private mongoDB;
    private collection;
    private readonly DEFAULT_ID;
    constructor(mongoDB: MongoDB);
    saveAgentState(agentState: AgentState, name: string, defaultId?: string): Promise<boolean>;
    getAgentState(defaultId?: string): Promise<AgentState | null>;
    getLatestAgentStateByName(name: string): Promise<AgentState | null>;
    updateAgentState(defaultId: string | undefined, updates: Partial<AgentState>): Promise<boolean>;
    deleteAgentState(defaultId?: string): Promise<boolean>;
    getAllAgentStates(limit?: number): Promise<Array<{
        defaultId: string;
        name: string;
        agentState: AgentState;
        createdAt: Date;
    }>>;
    saveDefaultAgentState(agentState: AgentState): Promise<boolean>;
    getDefaultAgentState(): Promise<AgentState | null>;
    updateDefaultAgentState(updates: Partial<AgentState>): Promise<boolean>;
    deleteDefaultAgentState(): Promise<boolean>;
}
//# sourceMappingURL=AgentConfigDB.d.ts.map