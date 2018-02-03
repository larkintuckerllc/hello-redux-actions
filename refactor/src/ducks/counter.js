import { createAction, handleActions } from 'redux-actions';

// ACTION CREATORS
export const incrementCounter = createAction('COUNTER_INCREMENT');
export const decrementCounter = createAction('COUNTER_DECREMENT');
// REDUCERS
export default handleActions({
  [incrementCounter](state) {
    return state + 1;
  },
  [decrementCounter](state) {
    return state - 1;
  },
}, 0);
// SELECTORS
export const getCounter = state => state.counter;
