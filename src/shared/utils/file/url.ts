/**
 * 从完整 URL 中提取路径部分
 * @param url 完整的 URL 字符串
 * @returns 提取的路径部分
 * @example
 */
export function getUrlPath(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.pathname;
  } catch (e) {
    // 如果 URL 解析失败，尝试使用正则表达式提取
    const match = url.match(/https?:\/\/[^\/]+(\/[^?#]*)/);
    return match ? match[1] : '';
  }
}