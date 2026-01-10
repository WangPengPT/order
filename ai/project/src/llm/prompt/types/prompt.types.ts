import {LLMMessage} from "../../client/llm.interface";
import {DialogueContext} from "../../../core/dialogue/dialogue.types";
import {MemoryContext} from "../../../core/memory/memory.types";

export interface PromptBuildInput {
    dialogue: DialogueContext
    memory: MemoryContext
    knowledge?: string
}

export interface BuiltPrompt {
    messages: LLMMessage[]
    metadata?: {
        tokenEstimate: number
        generationTime?: number
        promptVersion?: string
        modelName?: string
        temperature?: number
    }
}