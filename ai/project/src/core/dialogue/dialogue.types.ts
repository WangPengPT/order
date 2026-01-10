/* ===== DialogueContext - 纯技术调度 ===== */
export interface DialogueContext {
    // 技术轮次信息
    turnInfo: {
        turnNumber: number
        currentUserInput: string
        inputLength: number
    }
}