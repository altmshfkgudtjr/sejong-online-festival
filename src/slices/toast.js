import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial State
 * @type {{
 *   title: string;
 *   message: string;
 * }}
 * */
const initialState = {
  title: '',
  message: '',
};

/**
 * Slice
 */
const ToastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    /** Toast 갱신 */
    updateToast(state, action) {
      state.title = action.payload.title ? action.payload.title : '';
      state.message = action.payload.message;
    },
    /** Toast 제거 */
    deleteToast(state) {
      state.title = '';
      state.message = '';
    },
  },
});

export const { updateToast, deleteToast } = ToastSlice.actions;

export default ToastSlice.reducer;
