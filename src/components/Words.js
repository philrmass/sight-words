import React  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../styles/Words.module.css';

function Words({
  current,
  matched,
}) {
  function buildWords() {
    console.log('MAT', matched);

    return current.map((item) => {
      const isMatched = matched.some((match) => match === item.word);
      let divClass = styles.word;
      divClass += isMatched ? ` ${styles.match}` : '';

      return (
        <div
          key={`${item.level}-${item.word}`}
          className={divClass}>
          {item.word}
        </div>
      );
    });
  }

  return (
    <main className={styles.main}>
      <div className={styles.words}>
        {buildWords()}
      </div>
    </main>
  );
}

Words.propTypes = {
  current: PropTypes.arrayOf(PropTypes.object).isRequired,
  matched: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapState = (state) => ({
  current: state.game.current,
  matched: state.game.matched,
});

export default connect(mapState)(Words);
