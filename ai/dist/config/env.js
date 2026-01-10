"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
// 先尝试加载 .env
dotenv_1.default.config({ path: '.env' });
// 如果是开发环境（npm run dev）再加载 .env
if (process.env.NODE_ENV === 'development') {
    dotenv_1.default.config({
        path: '.env',
        override: true // 开发环境的配置覆盖生产配置
    });
}
function required(key) {
    if (!process.env[key]) {
        console.warn(`❌ Missing env: ${key}`);
        return "";
    }
    return process.env[key];
}
exports.env = {
    nodeEnv: process.env.NODE_ENV || "development",
    isDev: process.env.NODE_ENV === "development",
    apiKey: required("API_KEY"),
    deepseekApikey: required("DEEPSEEK_API_KEY"),
    port: required("PORT"),
    restaurantApiUrl: required("RESTAURANT_API_URL"),
    mongoDbUrl: required("MONGODB_URI"),
};
//# sourceMappingURL=env.js.map