import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userAPI from 'api/auth';
// slices
import { newToast } from 'slices/toast.thunk';
// actions
import * as actions from 'slices/user';

export const getUser = createAsyncThunk('user/getUser', async (_, { dispatch }) => {
  const res = await userAPI.getUser();
  dispatch(actions.setInfo(res));
  return res;
});

export const signin = createAsyncThunk('user/signin', async ({ id, pw }, { dispatch }) => {
  const res = await userAPI.signin({ id, pw }).catch(() => {
    dispatch(
      newToast({
        message: '계정이 존재하지 않습니다.',
        time: 2000,
      }),
    );
  });
  window.localStorage.setItem('tk', res.access_token);

  if (!!~res.access_roles.indexOf('general')) {
    window.location.href = '/';
  } else if (!!~res.access_roles.indexOf('exhibition')) {
    window.location.href = '/manage/crew';
  }
});

export const signup = createAsyncThunk('user/signup', async ({ id, pw }, { dispatch }) => {
  const res = await userAPI.signup({ id, pw, name, role });
  return res;
});
