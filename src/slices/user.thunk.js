import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userAPI from 'api/user';
// actions
import * as actions from 'slices/user';

export const getUser = createAsyncThunk('user/getUser', async (_, { dispatch }) => {
  const res = await userAPI.getUser();
  dispatch(actions.setInfo(res));
  return res;
});

export const signin = createAsyncThunk('user/signin', async ({ id, pw }, { dispatch }) => {
  const res = await userAPI.signin({ id, pw });
  window.localStorage.setItem('tk', res.access_token);
  window.location.href = '/';
});

export const signup = createAsyncThunk('user/signup', async ({ id, pw }, { dispatch }) => {
  const res = await userAPI.signup({ id, pw, name, role });
  return res;
});
