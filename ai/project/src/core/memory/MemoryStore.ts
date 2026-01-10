import {MemoryContext, MemoryRole} from "./memory.types";


export class MemoryStore {
    private context: MemoryContext = {
        shortTerm: []
    }

    push(role: MemoryRole, content: string) {
        this.context.shortTerm.push({
            id: crypto.randomUUID(),
            role,
            content,
            timestamp: new Date()
        })

        // 保留最近 10 条
        if (this.context.shortTerm.length > 10) {
            this.context.shortTerm.shift()
        }
    }

    getContext(): MemoryContext {
        // 只读副本，防止外部乱改
        return {
            shortTerm: [...this.context.shortTerm]
        }
    }

    clear() {
        this.context.shortTerm = []
    }
}