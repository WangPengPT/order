const fs = require('fs');
const csv = require('csv-parser');
const {menuService} = require('./menuService.js')
const {logger} = require("../utils/logger");

const xkeys = [
  "AIPO", "AMENDOIM", "CRUSTÁCEOS", "DIÓXIDO DE ENXOFRE E SULFITOS",
  "GLÚTEN", "LACTICÍNIOS", "LUPINS", "MOLUSCOS",
  "MOSTRADA", "NOZES", "OVO", "PEIXA", "SOJA", "SÉSAMO"
];
const keyimageids = [7, 9, 2, 12, 1, 5, 16, 14, 10, 6, 3, 8, 13, 11];

function makeDishData(data) {
  const x = [];

  Object.entries(data).forEach(([key, value]) => {
    for (let i = 0; i < xkeys.length; i++) {
      if (value === "TRUE" && key.startsWith(xkeys[i])) {
        x.push(keyimageids[i]);
      }
    }
  });

  let id = data['Variant SKU'];
  if (id && id.startsWith("'")) {
    id = id.substring(1);
  }

  let note = data['Body (HTML)'];
  if (note) {
    note = note
        .replaceAll(/<\/?(div|p|span|blockquote|img)>/g, '')
        .replaceAll("<br>", "\n");
  }

  const ret = {
    id: id,
    handle: data['Handle'],
    name: data['Title'],
    subname: data['Option1 Value'],
    note: note,
    category: data['Type'],
    image: data['Image Src'],
    tags: data['Tags'],
    x: x,
    price: data['Variant Price'],
  };
  return ret;
}

exports.processCSV = (file,all) => {
  logger.info("Processing CSV:",all);
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(file.path)
        .pipe(csv())
        .on('data', (data) => {
          const transformed = makeDishData(data);
          results.push(transformed);
        })
        .on('end', () => {
          menuService.updateMenu(results,all);
          fs.unlinkSync(file.path); // 删除临时文件
          resolve(results);
        })
        .on('error', reject);
  });
};


exports.processJSON = (file, all) => {
  return new Promise((resolve, reject) => {
    try {
      const fileContent = fs.readFileSync(file.path, 'utf8');

      const jsonData = JSON.parse(fileContent);

      // 更新菜单数据
      menuService.updateMenu(jsonData, all);

      fs.unlinkSync(file.path);

      resolve(jsonData);
    } catch (error) {
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      reject(error);
    }
  });
};