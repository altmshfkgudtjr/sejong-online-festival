import { createAsyncThunk } from '@reduxjs/toolkit';
import * as exhibitionAPI from 'api/exhibition';
import { createFormdata } from 'lib/utils/formdata';
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
    const res = await exhibitionAPI.getMyExhibition();
    dispatch(actions.setCurrentExhibition(res));
    return res;
  },
);

export const postExhibition = createAsyncThunk(
  'exhibition/postExhibition',
  async ({ name, type, post = '', contents: [], banner_photo, photos }) => {
    const res = await exhibitionAPI.postExhibition({
      name,
      type,
      post,
      contents,
    });
    console.log(res);
    const res1 = await exhibitionAPI.postExhibitionBanner(res, createFormdata({ banner_photo }));
    const res2 = await exhibitionAPI.postExhibitionGallery(res, createFormdata({ photos }));
    return res;
  },
);
