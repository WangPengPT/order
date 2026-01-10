export interface AgentState {
    model: AgentModel;
    systemPrompt: SystemPrompt;
}

export interface SystemPrompt {
    introduction: string
    responseProcedure: string[]
    matchRequirements: string[]
    formatRequirements: string[]
    prohibitedContent: string[]
    requiredElements: string[]
}

export interface AgentModel {
    name: string;
    baseURL: string
}