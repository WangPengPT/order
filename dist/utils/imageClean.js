const fs = require("fs");
const path = require("path");
const db = require("../filedb");

/**
 * 清理页面图片：删除未使用的文件、移除无效引用
 * @param {object} page - 从数据库读取的页面数据（如上 JSON）
 */
function cleanPageImages(page) {
    const data = page.data;

    const uploadDir = path.join(process.cwd(), db.pageDir, page.imagesPath);
    if (!fs.existsSync(uploadDir)) {
        console.warn(`目录不存在：${uploadDir}`);
        return;
    }

    // 1️⃣ 获取目录下所有图片文件名
    const localFiles = fs.readdirSync(uploadDir);
    console.log("本地文件:", localFiles);

    // 2️⃣ 收集数据中引用到的所有图片名
    const usedFiles = new Set();

    function collectSrc(obj) {
        if (!obj || typeof obj !== "object") return;
        for (const key in obj) {
            const val = obj[key];
            if (key === "src" && typeof val === "string" && val.trim() !== "") {
                usedFiles.add(val.trim());
            } else if (typeof val === "object") {
                collectSrc(val);
            }
        }
    }

    collectSrc(data);

    // 3️⃣ 清空无效的 src（数据引用了但文件不存在）
    function cleanInvalidSrc(obj) {
        if (!obj || typeof obj !== "object") return;
        for (const key in obj) {
            const val = obj[key];
            if (key === "src" && typeof val === "string" && val.trim() !== "") {
                if (!localFiles.includes(val.trim())) {
                    console.warn(`⚠️ 找不到图片: ${val}, 已清空`);
                    obj[key] = "";
                }
            } else if (typeof val === "object") {
                cleanInvalidSrc(val);
            }
        }
    }

    cleanInvalidSrc(data);

    // 4️⃣ 删除多余的文件（本地有但没在数据中引用）
    const unusedFiles = localFiles.filter(f => !usedFiles.has(f));
    for (const file of unusedFiles) {
        const filePath = path.join(uploadDir, file);
        fs.unlinkSync(filePath);
        console.log(`🗑 删除未使用文件: ${file}`);
    }

    // 5️⃣ 输出清理后的结果
    return page;
}


module.exports = {
    cleanPageImages
};