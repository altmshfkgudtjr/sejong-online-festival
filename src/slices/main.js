import { createSlice } from '@reduxjs/toolkit';

/*
	InitialState
*/
const initialState = {
  scheduleList: [],

  liveVideoList: [],

  lineupList: [],

  commentList: [],
};

/*
	Slice
*/
const MainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setScheduleList(state, action) {
      state.scheduleList = action.payload;
    },

    setLiveVideoList(state, action) {
      state.liveVideoList = action.payload;
    },

    setLineupList(state, action) {
      state.lineupList = action.payload;
    },

    setCommentList(state, action) {
      state.commentList = action.payload;
    },
  },
});

export const { setScheduleList, setLiveVideoList, setLineupList, setCommentList } =
  MainSlice.actions;

export default MainSlice.reducer;
