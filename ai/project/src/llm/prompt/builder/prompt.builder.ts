import {BuiltPrompt, PromptBuildInput} from "../types/prompt.types";
import {LLMMessage} from "../../client/llm.interface";

export function buildPrompt(input: PromptBuildInput, systemPrompt: string): BuiltPrompt {
    try {

        const userMessage = input.dialogue.turnInfo.currentUserInput

        const messages: LLMMessage[] = [
            {
                role: 'system',
                content: systemPrompt
            }
        ]

        if (input.knowledge && input.knowledge.trim()) {
            messages.push({
                role: 'system',
                content: `参考知识库信息（仅作为参考，请不要逐字照搬）:\n${input.knowledge}`
            })
        }

        for (const m of input.memory.shortTerm) {
            messages.push({
                role: m.role,
                content: m.content
            })
        }

        const tokenEstimate = estimateTokens(messages)

        return {
            messages,
            metadata: {
                tokenEstimate,
                generationTime: Date.now(),
                promptVersion: '1.0.0',
                modelName: "",
                temperature: 0.2
            }
        }

    } catch (error) {
        console.error(error);
        throw error;
    }

}

/**
 * 估算 token 数量
 */
function estimateTokens(messages: LLMMessage[]): number {
    // 简化估算：每个中文字符约2个token，英文约1.3个
    const totalChars = messages.reduce((sum, msg) =>
        sum + msg.content.length, 0
    )

    // 粗略估算：假设中英文混合
    const tokenEstimate = Math.ceil(totalChars * 1.5)

    // 加上消息结构的大致开销
    const overhead = messages.length * 20

    return tokenEstimate + overhead
}
