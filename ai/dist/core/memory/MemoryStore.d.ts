import { MemoryContext, MemoryRole } from "./memory.types";
export declare class MemoryStore {
    private context;
    push(role: MemoryRole, content: string): void;
    getContext(): MemoryContext;
    clear(): void;
}
//# sourceMappingURL=MemoryStore.d.ts.map