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
