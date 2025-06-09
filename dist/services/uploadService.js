const fs = require('fs');
const csv = require('csv-parser');
const db = require('../filedb.js');
const appStateService = require('./appStateService.js')

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

  return {
    id,
    handle: data['Handle'],
    name: data['Title'],
    subname: data['Option1 Value'],
    note,
    category: data['Type'],
    image: data['Image Src'],
    x,
    price: data['Variant Price'],
  };
}

exports.processCSV = (file) => {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(file.path)
      .pipe(csv())
      .on('data', (data) => {
        const transformed = makeDishData(data);
        results.push(transformed);
      })
      .on('end', () => {
        db.saveData('menu', results);

        fs.unlinkSync(file.path); // 删除临时文件
        resolve(results);
      })
      .on('error', reject);
  });
};
