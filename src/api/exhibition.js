import request from 'api';

/**
 * 동아리 GET
 */
export const getCrew = () => {
  return request.get('/api/exhibition/live-streaming');
};
