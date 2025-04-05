// i18n-convert.js
import XLSX from 'xlsx'
import fs from 'fs'
import path from 'path'
import { flatten,forEach,isObject,isNil  } from 'lodash-es'
import { fileURLToPath } from 'url';

/**
 * 将嵌套的对象扁平化
 * @param {*} obj 
 * @param {*} parentKey 
 * @param {*} result 
 * @returns 
 */
function flattenObject(obj, parentKey = '', result = {}) {
  forEach(obj, (value, key) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    // 如果是对象则递归调用扁平化
    if (isObject(value) && !isNil(value)) {
      flattenObject(value, newKey, result);
    } else {
      // 不是对象证明已经到里面那一层了，直接复制
      result[newKey] = value;
    }
  });
  return result;
}
/**
 * 核心导出函数
 * @param {*} jsonDir json文件目录
 * @param {*} outputFile excel表导出目录
 */
async function exportJsonToExcel(jsonDir, outputFile) {
  // 异步读取文件
  const files = fs.readdirSync(jsonDir);
  const locales = {};

  // 读取所有JSON文件
  files.forEach(file => {
    // 判断是否是json文件
    if (path.extname(file) === '.json') {
      // 根据路径获取后缀是.json的文件名也就是 zh.json 中的 zh
      const lang = path.basename(file, '.json');
      // 读取文件内容，并转化为对象
      const content = JSON.parse(fs.readFileSync(path.join(jsonDir, file), 'utf8'));
      // 将对象进行扁平化
      locales[lang] = flattenObject(content);
    }
  });

  // 获取所有key并去重  ['nav.home', 'nav.about']
  const allKeys = [...new Set(Object.values(locales).flatMap(Object.keys))];
  // 生成表头行  ['Key', 'zh-CN', 'en']  
  const wsData = [['Key', ...Object.keys(locales)]];

  // 遍历所有key
  allKeys.forEach(key => {
    // 生成行数据
    const row = [key];
    // 遍历所有语言
    Object.keys(locales).forEach(lang => {
      // 获取语言的值
      const value = locales[lang][key] || '';
      // 将值添加到行数据中
      row.push(value);
    });
    // 将行数据添加到表数据中
    wsData.push(row);
  });
  console.log(wsData);
  

  // 创建工作簿
  const wb = XLSX.utils.book_new();
  // 创建工作表
  const ws = XLSX.utils.aoa_to_sheet(wsData);
  // 将工作表添加到工作簿中
  XLSX.utils.book_append_sheet(wb, ws, 'Translations');
  // 写入文件
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

main().then(() => console.log("转换成功")).catch(()=> console.error("转换失败"));