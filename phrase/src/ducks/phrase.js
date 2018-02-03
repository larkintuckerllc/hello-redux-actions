import { createAction, handleActions } from 'redux-actions';

// ACTION CREATORS
export const setPhrase = createAction('PHRASE_SET');
export const clearPhrase = createAction('PHRASE_CLEAR');
// REDUCERS
export default handleActions({
  [setPhrase](state, { payload }) {
    return payload;
  },
  [clearPhrase]() {
    return null;
  },
}, null);
// SELECTORS
export const getPhrase = state => state.phrase;
