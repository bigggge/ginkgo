/**
 * store.js
 *
 * @author bigggge(me@haoduoyu.cc)
 * 2019/3/1.
 */

import createStore, { applyMiddlewares } from '../ginkgo-redux';
import logger from '../ginkgo-redux-logger';
import thunk from '../ginkgo-redux-thunk';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return 0;
  }
}

export function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'INCREMENT' });
    }, 2000);
  };
}

const store = createStore(counter, 0, applyMiddlewares(thunk, logger));

export default store;
