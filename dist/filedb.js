const fs = require('fs');
const path = require("path");
const {logger} = require('./utils/logger');

const appStateFile = 'appState.json'
const dirFolder = process.env.SAVE_ADDR || 'save/default'
const dirMonthRates = dirFolder + '/MonthRates';
const pageDir = `${dirFolder}/webPages/`
const datas = {};

function formatedPublicUploadsDir(...args) {
    // 展开所有参数并平铺数组
    const flatPaths = args.flatMap(arg =>
        Array.isArray(arg) ? arg : String(arg).split('/')
    ).filter(Boolean); // 去除空字符串
    return path.join(process.cwd(), 'public', 'uploads', ...flatPaths);
}

function formatedPublicDir(...args) {
    // 展开所有参数并平铺数组
    const flatPaths = args.flatMap(arg =>
        Array.isArray(arg) ? arg : String(arg).split('/')
    ).filter(Boolean); // 去除空字符串
    return path.join(process.cwd(), 'public', ...flatPaths);
}

function getImagePath(pageImagePath, name) {
    return '/uploads/' + pageImagePath +'/' + name
}

function loadData(key, defaultValue) {
    if (datas[key]) return datas[key];

    try {
        const filePath = path.join(__dirname, dirFolder, key + '.json');
        const data = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        datas[key] = jsonData;
        return jsonData ? jsonData : defaultValue;
    } catch (err) {
        return defaultValue
    }
}

function loadDataForce(key, defaultValue) {
    try {
        const filePath = path.join(__dirname, dirFolder, key + '.json');
        const data = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(data);

        return jsonData ? jsonData : defaultValue;
    } catch (err) {
        return defaultValue
    }
}


function saveData(key, value) {

    if (!value) value = datas[key];
    datas[key] = value;

    try {
        var saveStr = JSON.stringify(value, null, 2);
        const filePath = path.join(__dirname, dirFolder, key + '.json');
        fs.writeFileSync(filePath, saveStr, 'utf8');
    } catch (err) {

    }
}

function saveAppStateData(appState) {
    try {
        const json = JSON.stringify(appState.toJSON(), null, 2);
        const filePath = path.join(__dirname, dirFolder, appStateFile);
        fs.writeFileSync(filePath, json, 'utf8');
    } catch (err) {
        throw err;
    }
}


function loadAppStateData() {
    try {
        const filePath = path.join(__dirname, dirFolder, appStateFile);
        if (filePath == undefined) return;

        const data = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        return jsonData;
    } catch (err) {
        if (err.code == 'ENOENT') {
            console.log("未能找到 app state 数据");
        } else {
            throw err;
        }
    }
}

function fileExists(filename) {
    const fullPath = path.join(dirFolder, filename);
    return fs.existsSync(fullPath);
}

function hasPageFile(filename) {
    const fullPath = path.join(pageDir, filename);
    return fs.existsSync(fullPath);
}

if (!fs.existsSync(dirFolder)) {
    fs.mkdirSync(dirFolder, {recursive: true});
}

if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, {recursive: true});
}

function hasPageFiles() {
    try {
        const files = fs.readdirSync(pageDir);
        // 过滤出 .json 文件
        const jsonFiles = files.filter(file => file.endsWith('.json'));
        return jsonFiles.length > 0;
    } catch (err) {
        console.error('Error reading directory:', err.message);
        return false;
    }
}

function hasSomeFile(dir) {
    return fs.existsSync(dir);
}

function loadPage(filename) {
    try {
        const filePath = path.join(__dirname, pageDir, filename);
        const data = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        return jsonData
    } catch (err) {
        console.log("bd load error: ", err.message)
    }
}

function loadPages() {
    try {
        const res = [];
        const dirPath = path.join(__dirname, pageDir);
        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
            if (file.endsWith('.json')) {
                const filePath = path.join(dirPath, file);
                const data = fs.readFileSync(filePath, 'utf8');
                const jsonData = JSON.parse(data);
                res.push(jsonData);
            }
        });
        return res;
    } catch (err) {
        console.log("loadPages error: ", err.message);
        return [];
    }
}

function getWelcomeImageFiles(dir) {
    try {
        // 读取目录，返回文件和文件夹的名称数组
        const publicDir = formatedPublicUploadsDir(dir)
        const hasFiles = fs.existsSync(publicDir);
        if (!hasFiles) {
            logger.error(`没有找到: ${publicDir}`)
            return []
        }
        const files = fs.readdirSync(publicDir, {withFileTypes: true})

        // 只筛选出文件（排除文件夹）
        const fileNames = files
            .filter(dirent => dirent.isFile())
            .map(dirent => dirent.name)

        return fileNames
    } catch (error) {
        logger.error(`IMAGE目录空白: ${publicDir}`)
        return []
    }
}

function getWelcomeLogoFile(logoPath) {
    try {
        // 读取目录，返回文件和文件夹的名称数组
        const publicDir = formatedPublicUploadsDir(logoPath)
        const hasFile = fs.existsSync(publicDir);
        if (!hasFile) {
            logger.error(`没有找到: ${publicDir}`)
            return ''
        }
        const files = fs.readdirSync(publicDir, {withFileTypes: true})

        // 只筛选出文件（排除文件夹）
        const fileNames = files
            .filter(dirent => dirent.isFile())
            .map(dirent => dirent.name)
        if (fileNames.length > 1) throw new Error("Out of file quantity")
        return getImagePath(logoPath, fileNames[0])
    } catch (error) {
        return ""
    }
}

function deleteWelcomeImages(foldername,filenames) {
    filenames.forEach(filename => {
        const filePath = path.join(process.cwd(), 'public', 'uploads', foldername, filename)
        fs.unlink(filePath, (err) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    console.warn(`文件不存在: ${filePath}`)
                } else {
                    console.error(`删除文件错误: ${filePath}`, err)
                }
            } else {
                console.log(`成功删除文件: ${filePath}`)
            }
        })
    })
}

function deleteOldLogo(logoPath) {
    try {
        console.log("删除logo")
        const filePath = path.join(__dirname, 'public', logoPath)
        fs.unlink(filePath, (err) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    console.warn(`文件不存在: ${filePath}`)
                } else {
                    console.error(`删除文件错误: ${filePath}`, err)
                }
            } else {
                console.log(`成功删除文件: ${filePath}`)
            }
        })
    } catch (error) {
        console.log(`成功删除文件: ${filePath}`)
    }
}

function savePage(value, filename) {
    try {
        var saveStr = JSON.stringify(value, null, 2);
        const filePath = path.join(__dirname, pageDir, filename);
        fs.writeFileSync(filePath, saveStr, 'utf8');
    } catch (err) {
        console.log("bd save error: ", err.message)
    }
}

function removePageImage(imagesPath) {
    const publicDir = formatedPublicUploadsDir(imagesPath)
    if (fs.existsSync(publicDir)) {
        try {
            fs.rmSync(publicDir, {recursive: true, force: true});
            console.log(`成功删除文件夹：${publicDir}`);
        } catch (err) {
            console.error(`删除文件夹失败：${publicDir}`, err);
        }
    } else {
        console.warn(`文件夹不存在：${publicDir}`);
    }
}

function removePageData(dataFilename) {
    const filePath = path.join(__dirname, pageDir, dataFilename);
    if (fs.existsSync(filePath)) {
        try {
            fs.rmSync(filePath, {recursive: true, force: true});
            console.log(`成功删除文件夹：${filePath}`);
        } catch (err) {
            console.error(`删除文件夹失败：${filePath}`, err);
        }
    } else {
        console.warn(`文件夹不存在：${filePath}`);
    }
}

function saveMonthRates(key,value) {

    if (!value) value = datas[key];
    datas[key] = value;

    try {
        var saveStr = JSON.stringify(value, null, 2);
        const filePath = path.join(__dirname, dirMonthRates, key + '.json');
        fs.writeFileSync(filePath, saveStr, 'utf8');
        console.log("save MonthRate("+key+".json) success.");
    } catch (err) {
        console.log("save MonthRate("+key+".json) err:", err);
    }
}

function loadMonthRates(key, defaultValue) {
    try {
        const filePath = path.join(__dirname, dirMonthRates, key + '.json');
        const data = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(data);

        return jsonData ? jsonData : defaultValue;
    } catch (err) {
        return defaultValue
    }
}

module.exports = {
    loadData,
    saveData,
    saveAppStateData,
    loadAppStateData,
    loadDataForce,
    fileExists,
    loadPage,
    loadPages,
    savePage,
    hasPageFile,
    hasPageFiles,
    deleteWelcomeImages,
    getWelcomeImageFiles,
    deleteOldLogo,
    getWelcomeLogoFile,
    formatedPublicUploadsDir,
    getImagePath,
    removePageImage,
    removePageData,
    hasSomeFile,
    formatedPublicDir,
    saveMonthRates,
    loadMonthRates,
    dirFolder
};