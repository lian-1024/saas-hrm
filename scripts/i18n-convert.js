// i18n-convert.js
import XLSX from 'xlsx'
import fs from 'fs'
import path from 'path'
import { flatten,forEach,isObject,isNil  } from 'lodash-es'
import { fileURLToPath } from 'url';

function flattenObject(obj, parentKey = '', result = {}) {
  forEach(obj, (value, key) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (isObject(value) && !isNil(value)) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  });
  return result;
}
// 核心导出函数
async function exportJsonToExcel(jsonDir, outputFile) {
  const files = fs.readdirSync(jsonDir);
  const locales = {};

  // 读取所有JSON文件
  files.forEach(file => {
    if (path.extname(file) === '.json') {
      const lang = path.basename(file, '.json');
      const content = JSON.parse(fs.readFileSync(path.join(jsonDir, file), 'utf8'));
      
      locales[lang] = flattenObject(content);
    }
  });

  // 生成Excel数据
  const allKeys = [...new Set(Object.values(locales).flatMap(Object.keys))];
  
  const wsData = [['Key', ...Object.keys(locales)]];

  allKeys.forEach(key => {
    const row = [key];
    Object.keys(locales).forEach(lang => {
      row.push(locales[lang][key] || '');
    });
    wsData.push(row);
  });

  // 写入文件
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(wsData);
  XLSX.utils.book_append_sheet(wb, ws, 'Translations');
  XLSX.writeFile(wb, outputFile);
}



/* 使用示例 */
async function main() {
  // 导出JSON到Excel
  // await exportJsonToExcel('../public/locales', '../public/translations.xlsx');
  const localesDir = fileURLToPath(new URL("../public/locales",import.meta.url));
  const outputFile = fileURLToPath(new URL("../public/translations.xlsx",import.meta.url));
  await exportJsonToExcel(localesDir,outputFile);

  
  // 从Excel导入到JSON
  // await importExcelToJson('input.xlsx', './new-locales');
}

main().catch(console.error);