
const fs = require('fs');
const path = require("path");

const datas = {};

function loadData(key,defaultValue) {
	if (datas[key]) return datas[key];

	try {
		const filePath = path.join(__dirname, 'uploads', key + '.json');
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
		const filePath = path.join(__dirname, 'uploads', key + '.json');
		fs.writeFileSync(filePath, value, 'utf8');
	} catch (err) {

	}
}

// 创建上传目录（如果不存在）
if (!fs.existsSync('uploads')) {
	fs.mkdirSync('uploads');
}

module.exports = {
	loadData: loadData,
	saveData: saveData,
};