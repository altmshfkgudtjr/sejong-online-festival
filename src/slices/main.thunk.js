import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mainAPI from 'api/main';
// actions
import * as actions from 'slices/main';

export const getLineup = createAsyncThunk('main/getLineup', async (_, { dispatch }) => {
  const res = await mainAPI.getLineup();
  dispatch(actions.setLineupList(res.celebrities));
  return res.celebrities;
});

export const putLineup = createAsyncThunk('main/putLineup', async (celebrities, { dispatch }) => {
  dispatch(actions.setLineupList(celebrities));
  const res = await mainAPI.putLineup({ celebrities });
  return celebrities;
});

export const getSchedule = createAsyncThunk('main/getSchedule', async (_, { dispatch }) => {
  const res = await mainAPI.getSchedule();
  dispatch(actions.setScheduleList(res));
  return res;
});

export const putSchedule = createAsyncThunk('main/putSchedule', async (schedules, { dispatch }) => {
  dispatch(actions.setScheduleList(schedules));
  const res = await mainAPI.putSchedule({ schedules });
  return res;
});

export const getLive = createAsyncThunk('main/getLive', async (_, { dispatch }) => {
  const res = await mainAPI.getLive();
  dispatch(actions.setLiveVideoList(res));
  return res;
});

export const putLive = createAsyncThunk('main/putLive', async (videos, { dispatch }) => {
  dispatch(actions.setLiveVideoList(videos));
  const res = await mainAPI.putLive({ videos });
  return res;
});

export const getCommentList = createAsyncThunk(
  'main/getCommentList',
  async ({ contentId, skip, limit }, { dispatch }) => {
    const res = await mainAPI.getCommentList(contentId, skip, limit);
    dispatch(actions.setCommentList(res));
    return res;
  },
);

export const putComment = createAsyncThunk('main/putComment', async ({ contentId, comment }) => {
  const res = await mainAPI.putComment(contentId, { comments: comment });
  return res;
});
