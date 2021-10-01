/**
 * 숫자를 1,000단위로 구분.
 * @param {string | number} str
 * @returns {string}
 */
export const formatToPrice = str => {
  if (!str) {
    return '0';
  }

  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
};
