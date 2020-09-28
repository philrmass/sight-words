import React  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../styles/Controls.module.css';
import {
  startGame,
  stopGame,
  setMatched,
  clearMatched,
} from '../redux/game/actions';

function Controls({
  isPlaying,
  current,
  matched,
  startGame,
  stopGame,
  setMatched,
  clearMatched,
}) {
  return (
    <main className={styles.main}>
      <button onClick={startGame}>
        Start
      </button>
      <button onClick={stopGame}>
        Stop
      </button>
    </main>
  );
}

Controls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  current: PropTypes.arrayOf(PropTypes.object).isRequired,
  matched: PropTypes.arrayOf(PropTypes.object).isRequired, 
  startGame: PropTypes.func.isRequired,
  stopGame: PropTypes.func.isRequired,
  setMatched: PropTypes.func.isRequired,
  clearMatched: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  isPlaying: state.game.isPlaying,
  current: state.game.current,
  matched: state.game.matched,
});

const mapDispatch = {
  startGame,
  stopGame,
  setMatched,
  clearMatched,
};

export default connect(mapState, mapDispatch)(Controls);
