import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as fromPhrase from '../ducks/phrase';

class App extends Component {
  componentDidMount() {
    const { fetchPhrase } = this.props;
    fetchPhrase();
  }
  render() {
    const { clearPhrase, phrase, phraseError } = this.props;
    return (
      <div>
        <div>PHRASE: {phrase !== null ? phrase : 'NO PHRASE'}</div>
        <div>ERROR: {phraseError !== null ? phraseError : 'NO ERROR'}</div>
        <button onClick={() => clearPhrase()}>Clear</button>
      </div>
    );
  }
}
App.propTypes = {
  clearPhrase: PropTypes.func.isRequired,
  fetchPhrase: PropTypes.func.isRequired,
  phrase: PropTypes.string,
  phraseError: PropTypes.string,
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
    fetchPhrase: fromPhrase.fetchPhrase,
  },
)(App);
