"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationController = void 0;
const prompt_builder_1 = require("../../llm/prompt/builder/prompt.builder");
class ConversationController {
    memory;
    llm;
    count;
    agentConfig;
    knowledge;
    constructor(memory, llm, count = 0, agentConfig, knowledge) {
        this.memory = memory;
        this.llm = llm;
        this.count = count;
        this.agentConfig = agentConfig;
        this.knowledge = knowledge;
    }
    async *handleUserInput(input) {
        const kbContext = await this.knowledge.query(input, 5);
        // 1️⃣ 写入用户输入
        this.memory.push('user', input);
        // 2️⃣ 构建 prompt
        const prompt = (0, prompt_builder_1.buildPrompt)({
            dialogue: {
                turnInfo: {
                    turnNumber: this.count,
                    currentUserInput: input,
                    inputLength: input.length
                }
            },
            memory: this.memory.getContext(),
            knowledge: kbContext
        }, this.agentConfig.buildSystemPrompt());
        this.count++;
        // 3️⃣ 调用 LLM（stream）
        let fullReply = '';
        for await (const chunk of this.llm.generateStream(prompt.messages)) {
            fullReply += chunk;
            yield chunk;
        }
        // 4️⃣ 写入 AI 回复
        this.memory.push('assistant', fullReply);
    }
}
exports.ConversationController = ConversationController;
//# sourceMappingURL=ConversationController.js.map