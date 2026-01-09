"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentConfig = void 0;
class AgentConfig {
    model;
    systemPrompt;
    constructor(state, agentDB) {
        this.model = state.model;
        this.systemPrompt = state.systemPrompt;
    }
    // 获取 model 信息
    getModel() {
        return this.model;
    }
    // 更新 model
    updateModel(partial) {
        this.model = {
            ...this.model,
            ...partial
        };
    }
    // 保持你原来的其他方法...
    getSystemPrompt() {
        return this.systemPrompt;
    }
    updateSystemPrompt(partial) {
        this.systemPrompt = {
            ...this.systemPrompt,
            ...partial
        };
    }
    formatProcedure(title, steps) {
        if (!steps || steps.length === 0)
            return "";
        return `**${title}：**\n` +
            steps.map((step, index) => `${index + 1}. ${step}`).join("\n");
    }
    formatInline(title, items) {
        if (!items || items.length === 0)
            return "";
        return `**${title}:** ${items.join(", ")}`;
    }
    buildSystemPrompt() {
        const sp = this.systemPrompt;
        return `
${sp.introduction}

${this.formatProcedure("回复流程", sp.responseProcedure)}

${this.formatInline("匹配规则", sp.matchRequirements)}
${this.formatInline("格式要求", sp.formatRequirements)}
${this.formatInline("禁止内容", sp.prohibitedContent)}
${this.formatInline("必须包含", sp.requiredElements)}
`.trim();
    }
    static defaultConfig() {
        return {
            systemPrompt: {
                introduction: "你是小熊ai助手，帮助顾客寻找心仪的餐厅",
                responseProcedure: [
                    "首先检查知识库是否有完全匹配的餐厅类型",
                    "如果没有完全匹配，诚实地告诉用户 '未找到'",
                    "可以提供相似类型的选项，但必须明确说明这不是用户要的"
                ],
                matchRequirements: [
                    "必须精确匹配顾客请求的食物或餐厅类型",
                    "如果顾客明确要面条/noodles，不要推荐寿司/sushi",
                    "如果顾客要寿司/sushi，不要推荐面条/noodles",
                    "亚洲食物≠同一种类，要区分具体类别"
                ],
                formatRequirements: [
                    "用户用什么语言询问，你就用对应的语言回话",
                    "用md格式回复",
                    "推荐给客人的餐厅按照综合评分排序，评分为N/A不显示"
                ],
                prohibitedContent: [],
                requiredElements: [
                    "如果有餐厅信息必须有链接",
                    "只有符合要求才推荐至少5家餐厅，否则只推荐匹配的"
                ]
            },
            model: {
                name: "gpt-5-nano"
            }
        };
    }
}
exports.AgentConfig = AgentConfig;
//# sourceMappingURL=agentConfig.js.map