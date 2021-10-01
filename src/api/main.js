import request from 'api';

/**
 * 라인업 GET
 */
export const getLineup = () => {
  return request.get('/api/main/celebrity-lineup');
};

/**
 * 라인업 PUT
 * @param {object} data
 * @param {object[]} data.celebrities
 * @param {string} data.celebrities.name
 * @param {string} data.celebrities.datetime_info
 * @param {string} data.celebrities.youtube_link
 * @param {DateTime} data.celebrities.open_time
 */
export const putLineup = data => {
  return request.put('/api/main/celebrity-lineup', data);
};

/**
 * 축제일정 GET
 */
export const getSchedule = () => {
  return request.get('/api/main/festival-schedule');
};

/**
 * 축제일정 PUT
 * @param {object} data
 * @param {object[]} data.schedules
 */
export const putSchedule = data => {
  return request.put('/api/main/festival-schedule', data);
};

/**
 * 실시간 라이브 GET
 */
export const getLive = () => {
  return request.get('/api/main/live-streaming');
};

/**
 * 실시간 라이브 PUT
 * @param {object} data
 * @param {string[]} data.videos
 */
export const putLive = data => {
  return request.put('/api/main/live-streaming', data);
};

/**
 * 댓글 PUT
 * @param {string} contentId
 * @param {object} data
 * @param {string} data.comment
 */
export const putComment = (contentId, data) => {
  return request.put(`/api/comment/${contentId}`, data);
};

/**
 * 댓글 GET
 * @param {string} contentId Default - 메인 방명록
 * @param {number} skip
 * @param {number} limit
 */
export const getCommentList = (contentId = '61567c5699926a8b92dafbc4', skip, limit) => {
  return request.get(`/api/comment/${contentId}/${skip}/${limit}`);
};
