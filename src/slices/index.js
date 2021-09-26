import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
// reducers
import alarm from 'slices/alarm';
import modal from 'slices/modal';
import review from 'slices/review';
import toast from 'slices/toast';
import user from 'slices/user';
import class_ from 'slices/class';
import studio from 'slices/studio';
import service from 'slices/service';
import main from 'slices/main';
import search from 'slices/search';
import event from 'slices/event';
import category from 'slices/category';

const devMode = process.env.NODE_ENV === 'development';

/* Combined Reducer */
const reducer = combineReducers({
  alarm,
  modal,
  review,
  toast,
  user,
  class: class_,
  studio,
  service,
  main,
  search,
  event,
  category,
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
