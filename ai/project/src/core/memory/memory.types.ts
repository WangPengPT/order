
/* ===== MemoryContext - 只存事实 ===== */
import {LLMMessage} from "../../llm/client/llm.interface";

export type MemoryRole = 'user' | 'system' | 'assistant'

export interface MemoryItem {
    id: string
    role: MemoryRole
    content: string
    timestamp: Date
}

export interface MemoryContext {
    shortTerm: MemoryItem[]
}