import request from 'api';

/**
 * 라인업 GET
 */
export const getLineup = () => {
  return request.get('/api/main/celebrity-lineup');
};

/**
 * 축제일정 GET
 */
export const getSchedule = () => {
  return request.get('/api/main/festival-schedule');
};

/**
 * 실시간 라이브 GET
 */
export const getLive = () => {
  return request.get('/api/main/live-streaming');
};

/**
 * 동아리 GET
 */
export const getCrew = () => {
  return request.get('/api/main/live-streaming');
};
