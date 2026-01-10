import dotenv from "dotenv";

// 只在本地开发且没有PM2环境变量时加载 .env 文件
// PM2启动时会注入环境变量，此时不需要读取 .env 文件
if (!process.env.PM2_HOME && process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: '.env' });
}

function required(key: string) {
    const value = process.env[key];
    if (!value) {
        console.warn(`❌ Missing env: ${key}`);
        return ""
    }
    return value;
}

export const env = {
    nodeEnv: process.env.NODE_ENV || "development",
    isDev: process.env.NODE_ENV === "development",
    isProduction: process.env.NODE_ENV === "production",
    isPm2: !!process.env.PM2_HOME, // 判断是否是PM2环境

    // 环境变量
    apiKey: required("API_KEY"),
    deepseekApikey: required("DEEPSEEK_API_KEY"),
    port: required("PORT"),
    restaurantApiUrl: required("RESTAURANT_API_URL"),
    mongoDbUrl: required("MONGODB_URI"),
};