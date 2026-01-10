export interface LLMGenerateOptions {
    temperature?: number
    top_p?: number
    max_tokens?: number
    stop?: string[]
}

export interface LLMMessage {
    role: 'system' | 'user' | 'assistant'
    content: string
}

export interface LLMClient {
    generate(
        messages: LLMMessage[],
        options?: LLMGenerateOptions
    ): Promise<string>
}
