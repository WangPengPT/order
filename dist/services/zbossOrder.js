const axios = require('axios');

// --- 配置区域 (请参照 PDF 文档替换以下值) ---
const CONFIG = {
    // API 基础地址 (通常是 https://api.zonesoft.org/v3 或类似)
    BASE_URL: 'https://api.zonesoft.org/v3',

    // 您的凭证 (从 ZS BMS 后台获取)
    APP_ID: 'your_app_id_here',
    APP_SECRET: 'your_app_secret_here',

    // 您的店铺/终端 ID
    STORE_ID: '12345'
};

/**
 * 核心函数：发送结账数据到 ZoneSoft
 * @param {Object} myOrderData - 您点餐系统的原始订单数据
 */
async function sendCheckoutToZoneSoft(myOrderData) {

    // 1. 数据转换：将您的数据结构映射为 ZoneSoft 要求的 JSON 格式
    // 注意：具体字段名需对照文档 "Create Document" 或 "Create Sale" 章节
    const zsPayload = {
        store_id: CONFIG.STORE_ID,
        type: 'invoice', // 或 'receipt'
        date: new Date().toISOString(), // 交易时间
        external_ref: myOrderData.orderId, // 关联您的订单号，方便对账

        // 菜品明细 (Lines)
        lines: myOrderData.items.map(item => ({
            description: item.name,
            quantity: item.qty,
            unit_price: item.price, // 注意单位，通常是浮点数或分
            total_price: item.qty * item.price,

            // 重要：Tax ID 必须与 ZoneSoft 后台设置的税率 ID 对应 (如 1=23%, 2=13% 等)
            tax_id: mapTaxRateToId(item.taxRate)
        })),

        // 支付明细 (Payments) - 如果是“传输结账”，必须包含此项
        payments: [{
            type: 'cash', // 或 'card', 'online'
            amount: myOrderData.totalAmount
        }]
    };

    try {
        // 2. 构造请求头 (Headers)
        // 注意：某些 ZSAPI 版本需要基于 Body 计算 HMAC 签名，请检查文档鉴权部分
        const headers = {
            'Content-Type': 'application/json',
            'ZS-APP-ID': CONFIG.APP_ID,
            'ZS-APP-SECRET': CONFIG.APP_SECRET
            // 如果文档要求 Bearer Token，则使用: 'Authorization': `Bearer ${token}`
        };

        console.log('正在发送数据到 ZoneSoft:', JSON.stringify(zsPayload, null, 2));

        // 3. 发送 POST 请求
        const response = await axios.post(`${CONFIG.BASE_URL}/sales`, zsPayload, { headers });

        console.log('✅ 传输成功! ZoneSoft 单据 ID:', response.data.id);
        return response.data;

    } catch (error) {
        console.error('❌ 传输失败:');
        if (error.response) {
            // 服务器返回了错误状态码
            console.error('状态码:', error.response.status);
            console.error('错误详情:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error(error.message);
        }
    }
}

// --- 辅助函数：税率映射 ---
function mapTaxRateToId(rate) {
    // 示例逻辑：根据税率返回 ZoneSoft 的 Tax ID
    if (rate === 0.23) return 1;
    if (rate === 0.13) return 2;
    return 1; // 默认税率 ID
}


// 执行
// format
// --- 模拟调用 ---
// 假设这是您点餐系统里的一个订单对象
// const mySystemOrder = {
//     orderId: 'ORDER-9988',
//     totalAmount: 25.50,
//     items: [
//         { name: '牛肉汉堡', qty: 2, price: 10.00, taxRate: 0.23 },
//         { name: '可口可乐', qty: 1, price: 5.50, taxRate: 0.23 }
//     ]
// };
//sendCheckoutToZoneSoft(order)


class ZBossOrder {

    setKey(app_id, app_key, store_id) {
        CONFIG.APP_ID = app_id
        CONFIG.APP_SECRET = app_key
        CONFIG.STORE_ID = store_id
    }

    sendCheckout(order) {
        sendCheckoutToZoneSoft(order)
    }
}

const  orderSystem = new ZBossOrder()
module.exports = orderSystem