const uploadService = require('../services/uploadService');
const {getImagePath, formatedPublicUploadsDir, hasSomeFile, deleteOldLogo} = require('../filedb.js')
const menuController = require('./menuController');
const {WebPageDesignService} = require('../services/webPageDesignService.js')
const {logger} = require('../utils/logger.js')
const db = require('../filedb.js')
const fs = require('fs');
const path = require("path");
const {appState} = require('../state.js');
const {cleanPageImages} = require("../utils/imageClean");


const publicDir = path.join(process.cwd(), 'public', 'uploads')

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, {recursive: true});
}

class UploadController {
    constructor(webPageDesignService = new WebPageDesignService()) {
        this.webPageDesignService = webPageDesignService
    }

    getFileExtension(filename) {
        return filename.split('.').pop();
    }

    async handleUpload(req, res) {
        logger.info("上传菜单");
        const file = req.files && req.files[0];                 // ⚠️ 这次是 req.file，不是 req.files[0]

        if (!file) {
            return res.status(400).json({success: false, msg: 'No CSV uploaded'});
        }

        try {
            if (file.path.split('.').pop() == "csv") {
                const filename = path.basename(file.path).split('.')[0].split('-')[1];
                console.log("path name: ", filename)

                if (filename === "Menu") {
                    await uploadService.processNewCSV(file, req.body.update_all, req.body.takeaway);
                } else {
                    await uploadService.processCSV(file, req.body.update_all, req.body.takeaway);

                }

            } else {
                await uploadService.processJSON(file, req.body.update_all, req.body.takeaway);
            }


            logger.info("菜单上传成功")
            res.json({success: true, msg: 'Processed OK'});
        } catch (err) {
            console.error('CSV processing error:', err);
            logger.info("菜单上传失败")
            res.status(500).json({success: false, msg: err.message});
        } finally {
            // 删除 multer 临时文件
            fs.unlink(file.path, () => {
            });
        }
    }

    async handleUploadImage(req, res) {

        if (!req.file) {
            return res.status(400).json({error: '没有上传文件'})
        }

        let name = req.file.filename;
        let pos = name.indexOf("-");
        let endPos = name.lastIndexOf(".");
        name = name.substring(0, pos) + name.substring(endPos);


        const fullPublicPath = path.join(publicDir, name)

        // 将文件从临时目录复制到公开目录
        await fs.copyFileSync(req.file.path, fullPublicPath);

        res.json({
            success: true,
            imageUrl: `/uploads/${name}`
        });
        fs.unlink(req.file.path, () => {
        });
    }

    handleUploadWelcomeLogo = async (req, res) => {
        logger.info("上传Logo")
        try {
            if (!req.file) {
                return res.status(400).json({ error: '没有上传文件' });
            }

            const id = req.body.id;
            const page = await this.webPageDesignService.webPageRepository.getPageById(Number(id));

            if (!page) throw new Error("Not found the page");

            // 真正的图片目录
            const logoFolder = path.join(process.cwd(), db.pageDir, page.imagesPath);

            if (!fs.existsSync(logoFolder)) {
                fs.mkdirSync(logoFolder, { recursive: true });
            }

            const file = req.file;
            const name = file.originalname;  // 保留用户文件名

            const fullPath = path.join(logoFolder, name);

            // 保存上传文件
            fs.copyFileSync(file.path, fullPath);

            // 删除 Multer 临时文件
            fs.unlink(file.path, () => {});
            
            res.json({
                success: true,
                data: name
            });

        } catch (error) {
            logger.error('文件处理失败:', error.message);
            res.status(500).json({ error: '服务器处理文件时出错' });
        }
    }

    handleUploadTitleImages = async (req, res) => {
        logger.info("上传标题图片");
        try {
            const pageId = req.body.id;
            if (!pageId) return res.status(400).json({error: '缺少 pageId'});
            const indexes = Array.isArray(req.body.indexes)
                ? req.body.indexes.map(Number)
                : [Number(req.body.indexes)];
            const page = await this.webPageDesignService.webPageRepository.getPageById(Number(pageId));
            if (!page) return res.status(404).json({error: '页面不存在'});

            const uploadDir = path.join(process.cwd(), db.pageDir, page.imagesPath);
            if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, {recursive: true});

            const uploadedUrls = [];
            for (const i in req.files) {
                const file = req.files[i];
                const index = indexes[i] ?? null;
                const filePath = path.join(uploadDir, file.originalname);
                fs.renameSync(file.path, filePath);
                uploadedUrls.push({
                    index: index, name: file.originalname
                });
            }

            res.json({success: true, data: uploadedUrls});
        } catch (err) {
            logger.error('上传标题图失败', err);
            res.status(500).json({error: '保存文件失败'});
        }
    }

    handleUploadInformationImages = async (req, res) => {
        logger.info("上传信息图片");
        try {
            const pageId = req.body.id;
            if (!pageId) {
                return res.status(400).json({ error: "缺少 pageId" });
            }

            const page = await this.webPageDesignService.webPageRepository.getPageById(Number(pageId));
            if (!page) {
                return res.status(404).json({ error: "页面不存在" });
            }

            const uploadDir = path.join(process.cwd(), db.pageDir, page.imagesPath);
            if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

            // 获取并解析索引
            const frameIndexes = JSON.parse(req.body.frameIndexes || "[]");
            const informationIndexes = JSON.parse(req.body.informationIndexes || "[]");
            const imageIndexes = JSON.parse(req.body.imageIndexes || "[]");
            const serverImages = JSON.parse(req.body.serverImages || "[]");

            const uploadedResults = [];

            // ✅ 1. 处理本地上传的文件（local）
            if (req.files && req.files.length > 0) {
                for (let i = 0; i < req.files.length; i++) {
                    const file = req.files[i];
                    const frameIndex = frameIndexes[i];
                    const informationIndex = informationIndexes[i];
                    const imageIndex = imageIndexes[i];

                    const filePath = path.join(uploadDir, file.originalname);
                    fs.renameSync(file.path, filePath);

                    uploadedResults.push({
                        frameIndex,
                        informationIndex,
                        imageIndex,
                        filename: file.originalname, // 仅文件名
                        type: "local",
                    });
                }
            }

            // ✅ 2. 处理服务器端已有的图片（server）
            if (Array.isArray(serverImages) && serverImages.length > 0) {
                for (const item of serverImages) {
                    uploadedResults.push({
                        frameIndex: item.frameIndex,
                        informationIndex: item.informationIndex,
                        imageIndex: item.imageIndex,
                        filename: path.basename(item.src), // 提取文件名部分
                        src: item.src, // 保留原服务器路径
                        type: "server",
                    });
                }
            }

            // ✅ 3. 返回合并结果
            res.json({ success: true, data: uploadedResults });
        } catch (err) {
            logger.error("上传信息图片失败", err);
            res.status(500).json({ error: "保存文件失败" });
        }
    }

    handleUploadBackgroundImages = async (req, res) => {
        logger.info("上传背景");

        try {
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ error: "没有上传文件" });
            }

            const pageId = req.body.id;
            if (!pageId) return res.status(400).json({ error: "缺少 pageId" });

            const page = await this.webPageDesignService.webPageRepository.getPageById(Number(pageId));
            if (!page) throw new Error("页面不存在");

            const bgFolder = path.join(process.cwd(), db.pageDir, page.imagesPath);
            if (!fs.existsSync(bgFolder)) {
                fs.mkdirSync(bgFolder, { recursive: true });
                logger.info(`创建目录: ${bgFolder}`);
            }

            const results = [];

            for (const file of req.files) {
                const originalName = file.originalname;  // ✅ 正确文件名
                const tempPath = file.path;              // ✅ 临时文件路径

                const finalPath = path.join(bgFolder, originalName);

                // 移动文件到目标目录
                fs.renameSync(tempPath, finalPath);

                results.push(originalName);
            }

            res.json({
                success: true,
                data: results
            });

        } catch (error) {
            logger.error("文件处理失败:", error.message);
            res.status(500).json({
                error: "服务器处理文件时出错",
                internalError: error.message
            });
        }
    }
}

module.exports = {
    UploadController
};
