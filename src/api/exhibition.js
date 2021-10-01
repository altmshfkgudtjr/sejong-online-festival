import request from 'api';

/**
 * 전시회 리스트 GET
 */
export const getExhibitionList = () => {
  return request.get('/api/exhibition');
};

/**
 * 전시회 GET
 */
export const getExhibition = exhibitionId => {
  return request.get(`/api/exhibition/${exhibitionId}`);
};

/**
 * 나의 전시회 GET
 */
export const getMyExhibition = () => {
  return request.get(`/api/exhibition/me`);
};
