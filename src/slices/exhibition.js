import { createSlice } from '@reduxjs/toolkit';

/*
	InitialState
*/
const initialState = {
  crewList: [],

  currentCrew: {},
};

/*
	Slice
*/
const ExihibitionSlice = createSlice({
  name: 'exhibition',
  initialState,
  reducers: {
    setCrewList(state, action) {
      state.crewList = action.payload;
    },

    setCurrentCrew(state, action) {
      state.currentCrew = action.payload;
    },
  },
});

export const { setCrewList, setCurrentCrew } = ExihibitionSlice.actions;

export default ExihibitionSlice.reducer;
