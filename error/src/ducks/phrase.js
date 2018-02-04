import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

// ACTION CREATORS
export const setPhrase = createAction('PHRASE_SET');
export const clearPhrase = createAction('PHRASE_CLEAR');
// REDUCERS
const value = handleActions({
  [setPhrase]: {
    next(state, { payload }) {
      return payload;
    },
  },
  [clearPhrase]() {
    return null;
  },
}, null);
const error = handleActions({
  [setPhrase]: {
    next() {
      return null;
    },
    throw(state, { payload: { message } }) {
      return message;
    },
  },
  [clearPhrase]() {
    return null;
  },
}, null);
export default combineReducers({
  error,
  value,
});
// SELECTORS
export const getPhrase = state => state.phrase.value;
export const getPhraseError = state => state.phrase.error;
