import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mainAPI from 'api/main';
// actions
import * as actions from 'slices/main';

export const getLineup = createAsyncThunk('main/getLineup', async (_, { dispatch }) => {
  const res = await mainAPI.getLineup();
  dispatch(actions.setLineupList(res.celebrities));
  return res.celebrities;
});

export const getSchedule = createAsyncThunk('main/getSchedule', async (_, { dispatch }) => {
  const res = await mainAPI.getSchedule();
  dispatch(actions.setScheduleList(res));
  return res;
});

export const getLive = createAsyncThunk('main/getLive', async (_, { dispatch }) => {
  const res = await mainAPI.getLive();
  dispatch(actions.setLiveVideoList(res));
  return res;
});
