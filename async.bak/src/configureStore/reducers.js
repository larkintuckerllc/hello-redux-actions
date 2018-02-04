import { combineReducers } from 'redux';
import phrase from '../ducks/phrase';

const reducers = {
  phrase,
};
export default combineReducers(reducers);
