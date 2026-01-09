"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docToString = docToString;
function docToString(doc) {
    // 将 opening_hours 转为可读字符串
    const openingHoursStr = doc.opening_hours
        ? Object.entries(doc.opening_hours)
            .map(([day, info]) => {
            if (info.closed)
                return `${day}: closed`;
            return `${day}: ${info.open}-${info.close}${info.open2 ? `, ${info.open2}-${info.close2}` : ''}`;
        })
            .join('; ')
        : '';
    return [
        `ID: ${doc.id}`,
        `名称: ${doc.name}`,
        `英文名: ${doc.name_en}`,
        `葡语名: ${doc.name_pt}`,
        `地址: ${doc.address}`,
        `电话: ${doc.phone}`,
        `类型: ${doc.type?.join('、')}`,
        `类型英文: ${doc.type_en?.join('、')}`,
        `类型葡语: ${doc.type_pt?.join('、')}`,
        `描述: ${doc.description}`,
        `描述英文: ${doc.description_en}`,
        `描述葡语: ${doc.description_pt}`,
        `图片: ${doc.image_url}`,
        `网站: ${doc.website_url}`,
        `坐标: ${doc.lat}, ${doc.lng}`,
        `评分: ${doc.rating ?? 'N/A'}`,
        `营业时间: ${openingHoursStr}`,
        `是否可见: ${doc.visible}`,
        `Key ID: ${doc.key_id}`,
        `公告中文: ${doc.announcement_zh}`,
        `公告英文: ${doc.announcement_en}`,
        `公告葡语: ${doc.announcement_pt}`,
        `显示网站按钮: ${doc.show_website_button}`,
        `显示菜品图库: ${doc.show_dish_gallery}`,
        `创建时间: ${doc.created_at}`,
        `更新时间: ${doc.updated_at}`
    ]
        .filter(Boolean)
        .join(' | ');
}
//# sourceMappingURL=docToString.js.map