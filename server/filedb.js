
const fs = require('fs');
const path = require("path");

const datas = {};

function loadData(key,defaultValue) {
	if (datas[key]) return datas[key];

	try {
		const filePath = path.join(__dirname, 'save', key + '.json');
		console.log(filePath);
		const data = fs.readFileSync(filePath, 'utf8');
		const jsonData = JSON.parse(data);
		datas[key] = jsonData;
		return jsonData ? jsonData : defaultValue;
		//console.log(state.menu);
	} catch (err) {
		return defaultValue
	}
}

function saveData(key,value) {

	if (!value) value = datas[key];

	try {
		const filePath = path.join(__dirname, 'save', key + '.json');
		fs.writeFileSync(filePath, value, 'utf8');
	} catch (err) {

	}
}

if (!fs.existsSync('save')) {
	fs.mkdirSync('save');
}

module.exports = {
	loadData: loadData,
	saveData: saveData,
};