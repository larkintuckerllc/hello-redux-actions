import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as fromPhrase from '../ducks/phrase';

function App({
  clearPhrase,
  fetchPhrase,
  phrase,
  phraseError,
  phraseRequested,
}) {
  return (
    <div>
      <div><b>REQUESTED</b>: {phraseRequested ? 'TRUE' : 'FALSE'}</div>
      <div><b>PHRASE</b>: {phrase !== null ? phrase : 'NO PHRASE'}</div>
      <div><b>ERROR</b>: {phraseError !== null ? phraseError : 'NO ERROR'}</div>
      <button
        disabled={phraseRequested}
        onClick={() => fetchPhrase()}
      >
        Fetch
      </button>
      <button
        disabled={phraseRequested}
        onClick={() => clearPhrase()}
      >
        Clear
      </button>
    </div>
  );
}
App.propTypes = {
  clearPhrase: PropTypes.func.isRequired,
  fetchPhrase: PropTypes.func.isRequired,
  phrase: PropTypes.string,
  phraseError: PropTypes.string,
  phraseRequested: PropTypes.bool.isRequired,
};
App.defaultProps = {
  phrase: null,
  phraseError: null,
};
export default connect(
  state => ({
    phrase: fromPhrase.getPhrase(state),
    phraseError: fromPhrase.getPhraseError(state),
    phraseRequested: fromPhrase.getPhraseRequested(state),
  }),
  {
    clearPhrase: fromPhrase.clearPhrase,
    fetchPhrase: fromPhrase.fetchPhrase,
  },
)(App);
