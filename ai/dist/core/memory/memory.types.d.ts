export type MemoryRole = 'user' | 'system' | 'assistant';
export interface MemoryItem {
    id: string;
    role: MemoryRole;
    content: string;
    timestamp: Date;
}
export interface MemoryContext {
    shortTerm: MemoryItem[];
}
//# sourceMappingURL=memory.types.d.ts.map