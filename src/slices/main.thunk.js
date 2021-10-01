import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mainAPI from 'api/main';
// actions
import * as actions from 'slices/main';

export const getLineup = createAsyncThunk('main/getLineup', async (_, { dispatch }) => {
  const res = await mainAPI.getLineup();

  dispatch(actions.setLineupList(res.celebrities));

  return res.result;
});
