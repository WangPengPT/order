const fs = require('fs');
const path = require("path");

const appStateFile = 'appState.json'
const dirFolder = process.env.SAVE_ADDR || 'save/default'

const datas = {};

function loadData(key,defaultValue) {
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

function loadDataForce(key,defaultValue) {
	try {
		const filePath = path.join(__dirname, dirFolder, key + '.json');
		const data = fs.readFileSync(filePath, 'utf8');
		const jsonData = JSON.parse(data);

		return jsonData ? jsonData : defaultValue;
	} catch (err) {
		return defaultValue
	}
}


function saveData(key,value) {

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
	fs.mkdirSync(dirFolder,{ recursive: true });
}

module.exports = {
	loadData: loadData,
	saveData: saveData,
	saveAppStateData,
	loadAppStateData,
	loadDataForce,
	fileExists
};