import { createSlice } from '@reduxjs/toolkit';

/*
	InitialState
*/
const initialState = {
  info: {},
};

/*
	Slice
*/
const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setInfo(state, action) {
      state.info = action.payload;
    },
  },
});

export const { setInfo } = UserSlice.actions;

export default UserSlice.reducer;
