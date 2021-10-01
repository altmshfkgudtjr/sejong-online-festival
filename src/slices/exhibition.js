import { createSlice } from '@reduxjs/toolkit';

/*
	InitialState
*/
const initialState = {
  exhibitionList: [],

  currentExhibition: {},
};

/*
	Slice
*/
const ExihibitionSlice = createSlice({
  name: 'exhibition',
  initialState,
  reducers: {
    setExhibitionList(state, action) {
      state.exhibitionList = action.payload;
    },

    setCurrentExhibition(state, action) {
      state.currentExhibition = action.payload;
    },
  },
});

export const { setExhibitionList, setCurrentExhibition } = ExihibitionSlice.actions;

export default ExihibitionSlice.reducer;
