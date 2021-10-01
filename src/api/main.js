import request from 'api';

/**
 * 라인업 GET
 */
export const getLineup = () => {
  return request.get('/api/main/celebrity-lineup');
};
