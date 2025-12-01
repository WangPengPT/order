const fs = require('fs');
const path = require("path");
const {logger} = require('./utils/logger');

const appStateFile = 'appState.json'
const dirFolder = process.env.SAVE_ADDR || 'save/default'
const dirMonthRates = dirFolder + '/MonthRates';
const pageDir = `/public/uploads/${dirFolder}/webPages/`
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

if (!fs.existsSync(dirFolder)) {
    fs.mkdirSync(dirFolder, {recursive: true});
}

function getPageImages(imagesPath) {
    try {
        // 生成目录路径
        const paths = pageDir.split('/').filter(Boolean);
        const publicDir = path.join(process.cwd(), ...paths, imagesPath);
        console.log("public: ", publicDir);

        // 如果目录不存在，就创建（支持递归）
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
            logger.warn(`已自动创建目录: ${publicDir}`);
            return [];  // 新建目录没有文件，返回空数组
        }

        // 读取目录中的文件和子目录
        const files = fs.readdirSync(publicDir, { withFileTypes: true });

        // 只返回文件名称
        const fileNames = files
            .filter(dirent => dirent.isFile())
            .map(dirent => dirent.name);

        return fileNames;
    } catch (error) {
        logger.error(`读取 IMAGE 目录失败: ${error.message}`);
        return [];
    }
}


function removePageImage(imagesPath, filename) {
    const paths = pageDir.split('/')
    const publicDir = path.join(process.cwd(), ...paths, imagesPath, filename);
    if (fs.existsSync(publicDir)) {
        try {
            fs.rmSync(publicDir, {recursive: true, force: true});
            console.log(`成功删除文件：${publicDir}`);
        } catch (err) {
            console.error(`删除文件失败：${publicDir}`, err);
        }
    } else {
        console.warn(`文件不存在：${publicDir}`);
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

// function getPageImages(imagesPath) {
//     const paths = pageDir.split('/').filter(it => it !== '')
//     const pageImageFolder = path.join(process.cwd(), ...paths, imagesPath);
//     return fs.readdirSync(pageImageFolder);
// }

function getPageImage(imagesPath, name) {
    if (!name) return
    const paths = pageDir.split('/').filter(it => it !== '')
    const pageImage = path.join(process.cwd(), ...paths, imagesPath, name)
    return fs.readFileSync(pageImage)
}

function getImageAbsolutPath(imagesPath, name) {
    const paths = pageDir.split('/').filter(it => it !== '')
    return path.join(process.cwd(), ...paths, imagesPath, name)
}

function importPageImages(images, imagesPath) {
  const paths = pageDir.split('/').filter(it => it !== '')

  images.forEach(element => {
    const folderDir = path.join(process.cwd(), ...paths, imagesPath)

    if (!fs.existsSync(folderDir)) {
      fs.mkdirSync(folderDir, { recursive: true })
    }

    const filePath = path.join(folderDir, element.name)
    fs.writeFileSync(filePath, element.data)
  })
}

module.exports = {
    loadData,
    saveData,
    saveAppStateData,
    loadAppStateData,
    loadDataForce,
    fileExists,
    getPageImages,
    formatedPublicUploadsDir,
    getImagePath,
    formatedPublicDir,
    saveMonthRates,
    loadMonthRates,
    dirFolder,
    pageDir,
    removePageImage,
    getPageImage,
    getImageAbsolutPath,
    importPageImages
};