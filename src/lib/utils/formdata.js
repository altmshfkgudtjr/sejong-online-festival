/**
 * Object 객체를 FormData 객체로 변환해주는 함수
 * @param {object} obj
 * @returns {FormData}
 */
export const createFormdata = obj => {
  const formdata = new FormData();
  Object.keys(obj).forEach(item => {
    formdata.append(item, obj[item]);
  });
  return formdata;
};
