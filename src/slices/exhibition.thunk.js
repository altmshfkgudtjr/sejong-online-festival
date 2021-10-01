import { createAsyncThunk } from '@reduxjs/toolkit';
import * as exhibitionAPI from 'api/exhibition';
// actions
import * as actions from 'slices/exhibition';

export const getExhibitionList = createAsyncThunk(
  'exhibition/getExhibitionList',
  async (_, { dispatch }) => {
    const res = await exhibitionAPI.getExhibitionList();
    dispatch(actions.setExhibitionList(res));
    return res;
  },
);

export const getExhibition = createAsyncThunk(
  'exhibition/getExhibition',
  async (exhibitionId, { dispatch }) => {
    const res = await exhibitionAPI.getExhibition(exhibitionId);
    dispatch(actions.setCurrentExhibition(res));
    return res;
  },
);

export const getMyExhibition = createAsyncThunk(
  'exhibition/getMyExhibition',
  async (_, { dispatch }) => {
    const res = await exhibitionAPI.getMyExhibition(exhibitionId);
    dispatch(actions.setCurrentExhibition(res));
    return res;
  },
);
