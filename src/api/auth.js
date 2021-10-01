import request from 'api';

/**
 * 회원가입
 * @typedef {'admin' | 'esports' | 'exhibition' | 'event' | 'general'} Role
 *
 * @param {object} data
 * @param {string} data.id
 * @param {string} data.pw
 * @param {string} data.name
 * @param {Role[]} data.role
 */
export const signup = data => {
  return request.post('/api/auth/signup', data);
};

/**
 * 로그인
 * @param {object} data
 * @param {string} data.id
 * @param {string} data.pw
 */
export const signin = data => {
  return request.post('/api/auth/signin', data);
};

/**
 * 정보가져오기
 */
export const getUser = () => {
  return request.get('/api/auth/me');
};
