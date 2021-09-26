import request from 'api';

const testAPI = () => {
  return request.get('https://www.online.sejong.ac.kr/api/v3/info');
};
