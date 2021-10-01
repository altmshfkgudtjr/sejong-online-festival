import { createSlice } from '@reduxjs/toolkit';

/*
	InitialState
*/
const initialState = {
  list: [],

  current: {
    name: '',
    thumbnail: '',
  },

  prize: '',
};

/*
	Slice
*/
const EsportsSlice = createSlice({
  name: 'esports',
  initialState,
  reducers: {
    setEsportsList(state, action) {
      state.list = action.payload;
    },

    setCurrentEsport(state, action) {
      state.current = action.payload;
    },

    setPrize(state, action) {
      state.prize = action.payload;
    },
  },
});

export const { setEsportsList, setCurrentEsport, setPrize } = EsportsSlice.actions;

export default EsportsSlice.reducer;
