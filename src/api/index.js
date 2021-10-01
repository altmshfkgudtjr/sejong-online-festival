import axios from 'axios';

/**
 * URL Replace
 * - next.config.js 프록시 참조
 *
 * @param {string} url
 * @returns {string} URL
 */
const replaceURL = url => {
  let targetURL = url;

  if (process.env.NODE_ENV === 'production') {
    if (url.startsWith('/api/')) {
      targetURL = url.replace('/api/', `${process.env.NEXT_PUBLIC_API_SERVER_1}/`);
    }
    if (url.startsWith('/next/')) {
      targetURL = url.replace('/next/', '/new/');
    }
  }

  return targetURL;
};

/**
 * Request 성공 handler
 */
const requestSuccessHandler = config => {
  // 0. URL 설정
  Object.assign(config, { url: replaceURL(config.url) });

  // 1. Axios객체 headers에 JWT Token 존재
  Object.assign(config.headers, axios.defaults.headers.common);

  return config;
};

/**
 * Request 실패 handler
 */
const requesetErrorHandler = err => {
  return Promise.reject(err);
};

/** Response 성공 handler */
const responseSuccessHandler = res => {
  if (res.data.code === '200' || (res.data.code === 200) | (res.data.result === 'success')) {
    if (res.data.data) {
      // 반환값이 { code, message, data }인 경우
      return res.data.data;
    } else if (res.data.results) {
      // 반환값이 { code, message, results }인 경우
      return res.data.results;
    } else {
      // 반환값이 { code, message }인 경우
      return res.data;
    }
  } else {
    return responseErrorHandler(res.data);
  }
};

/**
 * Response 실패 handler
 */
const responseErrorHandler = err => {
  return Promise.reject(err);
};

/**
 * Axios 객체
 */
const request = axios.create({
  headers: {
    'Content-Type': 'application/json, charset=utf8',
    'Cache-Control': 'no-cache',
  },
});

/**
 * Axios Request 미들웨어
 */
request.interceptors.request.use(
  config => requestSuccessHandler(config),
  err => requesetErrorHandler(err),
);

/**
 * Axios Response 미들웨어
 */
request.interceptors.response.use(
  res => responseSuccessHandler(res),
  err => responseErrorHandler(err),
);

export default request;
