import { createAsyncThunk } from '@reduxjs/toolkit';
// actions
import * as actions from 'slices/toast';

const RefEvent = [];

/**
 * @dispatch 토스트 생성
 * @param {string} title 토스트 제목
 * @param {string} message 토스트 메세지
 * @param {number} time 토스트 시간
 */
export const newToast = createAsyncThunk(
  'toast/newToast',
  async ({ title, message, time }, { dispatch }) => {
    if (RefEvent.length !== 0) {
      let event = RefEvent.shift();
      clearTimeout(event);
    }
    dispatch(actions.deleteToast());
    setTimeout(function () {
      dispatch(actions.updateToast({ title, message }));
      let event = window.setTimeout(function () {
        dispatch(actions.deleteToast());
      }, time || 2000);
      RefEvent.push(event);
    }, 50);
  },
);
