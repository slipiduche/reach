import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetFingers = class extends React.Component {
  render() {
    const { parent, playable, hand } = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : 'Pick fingers'}
        <br />

        <button
          disabled={!playable}
          onClick={() => parent.selectFingers(0)}
        >0</button>
        <button
          disabled={!playable}
          onClick={() => parent.selectFingers(1)}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.selectFingers(2)}
        >2</button>
        <button
          disabled={!playable}
          onClick={() => parent.selectFingers(3)}
        >3</button>
        <button
          disabled={!playable}
          onClick={() => parent.selectFingers(4)}
        >4</button>
        <button
          disabled={!playable}
          onClick={() => parent.selectFingers(5)}
        >5</button>
      </div>
    );
  }
}
exports.GetGuess = class extends React.Component {
  render() {
    const { parent, playable, hand } = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : 'Pick guess'}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess(0)}
        >0</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess(1)}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess(2)}
        >2</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess(3)}
        >3</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess(4)}
        >4</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess(5)}
        >5</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess(6)}
        >6</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess(7)}
        >7</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess(8)}
        >8</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess(9)}
        >9</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess(10)}
        >10</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const { outcome } = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;
