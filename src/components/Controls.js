import React  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../styles/Controls.module.css';
import {
  startGame,
  stopGame,
} from '../redux/game/actions';

function Controls({
  words,
  isPlaying,
  startGame,
  stopGame,
}) {
  return (
    <main className={styles.main}>
      <button
        className={styles.button}
        disabled={isPlaying}
        onClick={() => startGame(words)}
      >
        Start
      </button>
      <button
        className={styles.button}
        disabled={!isPlaying}
        onClick={stopGame}
      >
        Stop
      </button>
    </main>
  );
}

Controls.propTypes = {
  words: PropTypes.arrayOf(PropTypes.object).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired,
  stopGame: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  words: state.words.all,
  isPlaying: state.game.isPlaying,
});

const mapDispatch = {
  startGame,
  stopGame,
};

export default connect(mapState, mapDispatch)(Controls);
