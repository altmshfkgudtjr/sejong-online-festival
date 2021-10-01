import { createAsyncThunk } from '@reduxjs/toolkit';
import * as exhibitionAPI from 'api/exhibition';
// actions
import * as actions from 'slices/exhibition';

export const getCrew = createAsyncThunk('exhibition/getCrew', async (_, { dispatch }) => {
  const res = await exhibitionAPI.getCrew();
  dispatch(actions.setCrewList(res));
  return res;
});
