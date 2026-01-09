"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryStore = void 0;
class MemoryStore {
    context = {
        shortTerm: []
    };
    push(role, content) {
        this.context.shortTerm.push({
            id: crypto.randomUUID(),
            role,
            content,
            timestamp: new Date()
        });
        // 保留最近 10 条
        if (this.context.shortTerm.length > 10) {
            this.context.shortTerm.shift();
        }
    }
    getContext() {
        // 只读副本，防止外部乱改
        return {
            shortTerm: [...this.context.shortTerm]
        };
    }
    clear() {
        this.context.shortTerm = [];
    }
}
exports.MemoryStore = MemoryStore;
//# sourceMappingURL=MemoryStore.js.map