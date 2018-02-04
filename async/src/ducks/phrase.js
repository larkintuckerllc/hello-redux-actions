import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import * as fromAPI from '../apis/phrase';

// ACTION CREATORS
const fetchPhraseRequest = createAction('PHRASE_FETCH_REQUEST');
const fetchPhraseResponse = createAction('PHRASE_FETCH_RESPONSE');
export const fetchPhrase = () => (dispatch) => {
  dispatch(fetchPhraseRequest());
  fromAPI.getPhrase()
    .then((value) => {
      dispatch(fetchPhraseResponse(value));
    })
    .catch((err) => {
      dispatch(fetchPhraseResponse(err));
    });
};
// REDUCERS
const requested = handleActions({
  [fetchPhraseRequest]() {
    return true;
  },
  [fetchPhraseResponse]() {
    return false;
  },
}, false);
const value = handleActions({
  [fetchPhraseResponse]: {
    next(state, { payload }) {
      return payload;
    },
  },
}, null);
const error = handleActions({
  [fetchPhraseResponse]: {
    next() {
      return null;
    },
    throw(state, { payload: { message } }) {
      return message;
    },
  },
}, null);
export default combineReducers({
  error,
  requested,
  value,
});
// SELECTORS
export const getPhrase = state => state.phrase.value;
export const getPhraseError = state => state.phrase.error;
export const getPhraseRequested = state => state.phrase.requested;
