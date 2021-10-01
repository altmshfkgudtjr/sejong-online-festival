import { createAsyncThunk } from '@reduxjs/toolkit';
import * as esportsAPI from 'api/esports';
// actions
import * as actions from 'slices/esports';
// utils
import { createFormdata } from 'lib/utils/formdata';

export const getEsportsEvent = createAsyncThunk(
  'esports/getEsportsEventList',
  async (eventId, { dispatch }) => {
    const res = await esportsAPI.getEvent();
    dispatch(actions.setCurrentEsport(res));
    return res;
  },
);

export const getEsportsEventList = createAsyncThunk(
  'esports/getEsportsEventList',
  async (_, { dispatch }) => {
    const res = await esportsAPI.getEventList();
    dispatch(actions.setEsportsList(res));
    return res;
  },
);

export const putEsportsEvent = createAsyncThunk(
  'esports/putEsportsEvent',
  async ({ event_name, photo }, _) => {
    const eventRes = await esportsAPI.putEvent({ event_name });
    const bannerRes = await esportsAPI.putEventBanner(eventRes.event_id, createFormdata({ photo }));
    return bannerRes;
  },
);

export const deleteEvent = createAsyncThunk('esports/deleteEvent', async (eventId, _) => {
  const res = await esportsAPI.deleteEvent(eventId);
  return res;
});

export const startEvent = createAsyncThunk('esports/startEvent', async (eventId, _) => {
  const res = await esportsAPI.startEvent(eventId);
  return res;
});

export const putTeam = createAsyncThunk('esports/putTeam', async ({ teamName, members }, _) => {
  const res = await esportsAPI.putTeam({ team_name: teamName, members });
  return res;
});

export const deleteTeam = createAsyncThunk(
  'esports/deleteTeam',
  async ({ eventId, teamName }, _) => {
    const res = await esportsAPI.deleteTeam(eventId, teamName);
    return res;
  },
);
