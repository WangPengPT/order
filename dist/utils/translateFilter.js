const db = require('../filedb');

function translaterFilter() {
    const menu = db.loadData('menu', []);
    const newMenu = extractTranslations(menu)
    db.saveData("newMenu", newMenu)
    return newMenu
}

function extractTranslations(data) {
  return data.map(item => {
    const result = { id: item.id, handle: item.handle }; // Always include id

    if (item.name_en || item.name_cn) {
      if (item.name_en) result.name_en = item.name_en;
      if (item.name_cn) result.name_cn = item.name_cn;
    }

    // Only add translations if they exist
    if (item.name_en || item.name_cn) {
      if (item.name_en) result.name_en = item.name_en;
      if (item.name_cn) result.name_cn = item.name_cn;
    }

    if (item.subname_en || item.subname_cn) {
      if (item.subname_en) result.subname_en = item.subname_en;
      if (item.subname_cn) result.subname_cn = item.subname_cn;
    }

    if (item.note_en || item.note_cn) {
      if (item.note_en) result.note_en = item.note_en;
      if (item.note_cn) result.note_cn = item.note_cn;
    }

    // Only return objects that have at least one translation
    return (item.name_en || item.name_cn || 
            item.subname_en || item.subname_cn || 
            item.note_en || item.note_cn) 
           ? result 
           : null;
  }).filter(item => item !== null);
}


module.exports = {
    translaterFilter
}