import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import * as fromPhrase from '../apis/phrase';

// TODO: HOW ABOUT BLOCKING
// ACTION CREATORS
export const fetchPhrase = createAction('PHRASE_FETCH', fromPhrase.get);
export const clearPhrase = createAction('PHRASE_CLEAR');
// REDUCERS
const value = handleActions({
  [fetchPhrase]: {
    next(state, { payload }) {
      return payload;
    },
  },
  [clearPhrase]() {
    return null;
  },
}, null);
const error = handleActions({
  [fetchPhrase]: {
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
  value,
  error,
});
// SELECTORS
export const getPhrase = state => state.phrase.value;
export const getPhraseError = state => state.phrase.error;
