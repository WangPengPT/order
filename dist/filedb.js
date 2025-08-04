const fs = require('fs');
const path = require("path");
const {logger} = require("./utils/logger");

const appStateFile = 'appState.json'
const dirFolder = process.env.SAVE_ADDR || 'save/default'
const dirMonthRates = dirFolder + '/MonthRates';

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
		console.log(err);
	}
}

function saveAppStateData(appState) {
    try {
        const json = JSON.stringify(appState.toJSON(), null, 2);
        const filePath = path.join(__dirname, dirFolder, appStateFile);
        fs.writeFileSync(filePath, json, 'utf8');
    } catch (err) {
		console.log("save appState err:", err);
        throw err;
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

function loadMonthRates(key,defaultValue) {
	try {
		const filePath = path.join(__dirname, dirMonthRates, key + '.json');
		const data = fs.readFileSync(filePath, 'utf8');
		const jsonData = JSON.parse(data);

		return jsonData ? jsonData : defaultValue;
	} catch (err) {
		return defaultValue
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

if (!fs.existsSync(dirMonthRates)) {
	fs.mkdirSync(dirMonthRates,{ recursive: true });
}

module.exports = {
	loadData,
	saveData,
	saveAppStateData,
	saveMonthRates,
	loadMonthRates,
	loadAppStateData,
	loadDataForce,
	fileExists
};