import { createSlice } from '@reduxjs/toolkit';

/*
	InitialState
*/
const initialState = {
  scheduleList: [
    {
      day_title: '19 TUE',
      events: [
        {
          contents: '톡톡톡 토크콘서트',
          start_time: new Date(),
          end_time: new Date(),
          place_info: '학생회관',
        },
      ],
    },
    {
      day_title: '20 WED',
      events: [
        {
          contents: '톡톡톡 토크콘서트',
          start_time: new Date(),
          end_time: new Date(),
          place_info: '학생회관',
        },
      ],
    },
    {
      day_title: '21 THU',
      events: [
        {
          contents: '톡톡톡 토크콘서트',
          start_time: new Date(),
          end_time: new Date(),
          place_info: '학생회관',
        },
      ],
    },
    {
      day_title: '22 FRI',
      events: [
        {
          contents: '톡톡톡 토크콘서트',
          start_time: new Date(),
          end_time: new Date(),
          place_info: '학생회관',
        },
      ],
    },
  ],

  liveVideoList: [],

  lineupList: [],
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
  },
});

export const { setScheduleList, setLiveVideoList, setLineupList } = MainSlice.actions;

export default MainSlice.reducer;
