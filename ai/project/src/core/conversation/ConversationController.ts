import {MemoryStore} from "../memory/MemoryStore";
import {OpenAiClient} from "../../llm/client/openAi.client";
import {buildPrompt} from "../../llm/prompt/builder/prompt.builder";
import {Knowledge} from "../../knowledge/Knowledge";
import {AgentConfig} from "../agent/agentConfig";

export class ConversationController {
    knowledge: Knowledge

    constructor(
        private memory: MemoryStore,
        private llm: OpenAiClient,
        private count = 0,
        private agentConfig: AgentConfig,
        knowledge: Knowledge
    ) {
        this.knowledge = knowledge
    }

    async* handleUserInput(input: string) {

        const kbContext = await this.knowledge.query(input, 20)
        // 1️⃣ 写入用户输入
        this.memory.push('user', input)

        // 2️⃣ 构建 prompt
        const prompt = buildPrompt({
            dialogue: {
                turnInfo: {
                    turnNumber: this.count,
                    currentUserInput: input,
                    inputLength: input.length
                }
            },
            memory: this.memory.getContext(),
            knowledge: kbContext
        }, this.agentConfig.buildSystemPrompt())
        this.count++
        // 3️⃣ 调用 LLM（stream）
        let fullReply = ''

        for await (const chunk of this.llm.generateStream(prompt.messages)) {
            fullReply += chunk
            yield chunk
        }

        // 4️⃣ 写入 AI 回复
        this.memory.push('assistant', fullReply)
    }
}