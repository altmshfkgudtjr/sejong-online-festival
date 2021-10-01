import request from 'api';

export const testAPI = () => {
  return request.post('/api/auth/signin');
};
