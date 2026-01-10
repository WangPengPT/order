import dotenv from "dotenv";

// 只在本地开发且没有PM2环境变量时加载 .env 文件
// PM2启动时会注入环境变量，此时不需要读取 .env 文件
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: '.env' });
}

function getEnv(key: string) {
    const value = process.env[key];
    if (!value) {
        console.warn(`❌ Missing env: ${key}`);
        return ""
    }
    return value;
}

export const env = {
    isProduction: process.env.NODE_ENV === "production",

    // 环境变量
    apiKey: getEnv("API_KEY"),
    deepseekApikey: getEnv("DEEPSEEK_API_KEY"),
    port: getEnv("PORT"),
    restaurantApiUrl: getEnv("RESTAURANT_API_URL"),
    mongoDbUrl: getEnv("MONGODB_URI"),

    mongoDbName: getEnv("MONGODB_NAME"),

};