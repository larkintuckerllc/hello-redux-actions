import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as fromPhrase from '../ducks/phrase';

function App({
  clearPhrase,
  phrase,
  phraseError,
  setPhrase,
}) {
  return (
    <div>
      <div><b>PHRASE:</b> {phrase !== null ? phrase : 'NO PHRASE'}</div>
      <div><b>ERROR:</b> {phraseError !== null ? phraseError : 'NO ERROR'}</div>
      <button onClick={() => setPhrase('A sample phrase.')}>Set</button>
      <button onClick={() => setPhrase(new Error('A sample error.'))}>Set Error</button>
      <button onClick={() => clearPhrase()}>Clear</button>
    </div>
  );
}
App.propTypes = {
  clearPhrase: PropTypes.func.isRequired,
  phrase: PropTypes.string,
  phraseError: PropTypes.string,
  setPhrase: PropTypes.func.isRequired,
};
App.defaultProps = {
  phrase: null,
  phraseError: null,
};
export default connect(
  state => ({
    phrase: fromPhrase.getPhrase(state),
    phraseError: fromPhrase.getPhraseError(state),
  }),
  {
    clearPhrase: fromPhrase.clearPhrase,
    setPhrase: fromPhrase.setPhrase,
  },
)(App);
