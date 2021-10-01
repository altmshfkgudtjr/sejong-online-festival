import request from 'api';

/**
 * 이벤트 리스트 GET
 */
export const getEventList = () => {
  return request.get('/api/esports/events');
};

/**
 * 이벤트 GET
 */
export const getEvent = eventId => {
  return request.get(`/api/esports/${eventId}`);
};

/**
 * 이벤트 생성
 * @param {object} data
 * @param {string} data.event_name
 */
export const putEvent = data => {
  return request.put('/api/esports/event', data);
};

/**
 * 이벤트 배너 생성
 * @param {FormData} data
 * @param {File} data.photo
 */
export const putEventBanner = (eventId, data) => {
  return request.put(`/api/esports/${eventId}/banner`, data);
};

/**
 * 이벤트 제거
 * @param {string} eventId
 */
export const deleteEvent = eventId => {
  return request.delete(`/api/esports/event/${eventId}`);
};

/**
 * 이벤트 시작
 * @param {string} eventId
 */
export const startEvent = eventId => {
  return request.put(`/api/esports/event/${eventId}/start`);
};

/**
 * 팀 추가
 * @param {object} data
 * @param {string} data.team_name
 * @param {object[]} data.members
 * @param {string} data.members.name
 * @param {number} data.members.sutdent_id
 * @param {string} data.member.major
 */
export const putTeam = data => {
  return request.put(`/api/esports/event/${eventId}/start`, data);
};

/**
 * 팀 제거
 * @param {string} eventId
 * @param {string} teamName
 */
export const deleteTeam = (eventId, teamName) => {
  return request.delete(`/api/esports/${eventId}/${teamName}`);
};
