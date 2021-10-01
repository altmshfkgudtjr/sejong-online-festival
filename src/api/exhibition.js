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

export const postExhibition = data => {
  return request.post(`/api/exhibition`, data);
};

export const postExhibitionBanner = (exhibitionId, data) => {
  return request.put(`/api/exhibition/${exhibitionId}/banner`, data);
};

export const postExhibitionGallery = (exhibitionId, data) => {
  return request.put(`/api/exhibition/${exhibitionId}/photo`, data);
};

/**
 * 나의 전시회 GET
 */
export const getMyExhibition = () => {
  return request.get(`/api/exhibition/me`);
};
