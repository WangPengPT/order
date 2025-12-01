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
    category: data['SellType'],
    image: data['Image Src'],
    tags: data['Tags'],
    x: x,
    price: data['Variant Price'],
    base_price: data['Variant Compare At Price'],
  };
  return ret;
}

exports.processCSV = (file,all,takeaway) => {
  logger.info("Processing CSV:",all,takeaway);
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(file.path)
        .pipe(csv())
        .on('data', (data) => {
          const transformed = makeDishData(data);
          results.push(transformed);
        })
        .on('end', () => {
          menuService.updateMenu(results,all,takeaway);
          fs.unlinkSync(file.path); // 删除临时文件
          resolve(results);
        })
        .on('error', reject);
  });
};

exports.processNewCSV = (file, all, takeaway) => {
    logger.info("Processing NEW CSV:", all, takeaway);

    return new Promise((resolve, reject) => {
        const results = [];

        fs.createReadStream(file.path)
            .pipe(csv())  // 这里会把一行 CSV → 一个 object
            .on('data', (data) => {
                // data 就已经是你的对象了：
                // { id: '1', name: 'xxx', x: '[2,8]', ... }

                // 修复 x 字段（因为从 CSV 读出来是字符串）
                if (typeof data.x === "string") {
                    try {
                        data.x = JSON.parse(data.x); // 字符串 → 数组
                    } catch (e) {
                        data.x = [];
                    }
                }

                // 字段转换成你系统需要的格式
                const dish = {
                    id: data.id,
                    handle: data.handle,
                    name: data.name,
                    subname: data.subname,
                    note: data.note,
                    category: data.category,
                    image: data.image,
                    tags: data.tags,
                    x: data.x,
                    price: data.price,
                    base_price: data.base_price || "0",
                    org_id: data.org_id,
                    name_en: data.name_en,
                    name_cn: data.name_cn,
                    note_en: data.note_en,
                    note_cn: data.note_cn
                };

                results.push(dish);
            })
            .on('end', () => {
                menuService.updateMenu(results, all, takeaway);
                fs.unlinkSync(file.path);
                resolve(results);
            })
            .on('error', reject);
    });
};

exports.processJSON = (file, all,takeaway) => {
  return new Promise((resolve, reject) => {
    try {
      const fileContent = fs.readFileSync(file.path, 'utf8');

      const jsonData = JSON.parse(fileContent);

      // 更新菜单数据
      menuService.updateMenu(jsonData, all, takeaway);

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