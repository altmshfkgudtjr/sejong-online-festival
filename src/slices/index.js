import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
// reducers
import modal from 'slices/modal';
import toast from 'slices/toast';
import main from 'slices/main';
import exhibition from 'slices/exhibition';
import user from 'slices/user';
import esports from 'slices/esports';

const devMode = process.env.NODE_ENV === 'development';

/* Combined Reducer */
const reducer = combineReducers({
  modal,
  toast,
  main,
  exhibition,
  user,
  esports,
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
