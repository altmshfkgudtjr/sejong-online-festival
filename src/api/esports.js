import request from 'api';

/**
 * 라인업 GET
 */
export const getEvents = () => {
  return request.get('/api/esports/events');
};
