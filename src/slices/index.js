import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
// reducers
import modal from 'slices/modal';
import toast from 'slices/toast';

const devMode = process.env.NODE_ENV === 'development';

/* Combined Reducer */
const reducer = combineReducers({
  modal,
  toast,
});

/* Create Store & Apply Middlewares */
const makeStore = () =>
  configureStore({
    reducer,
    devTools: devMode,
  });

const wrapper = createWrapper(makeStore, {
  debug: devMode,
});

export default wrapper;
