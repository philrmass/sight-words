import React  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../styles/Words.module.css';

function Words({
  words,
}) {
  function buildWords() {
    return words.map((item) => (
      <div
        key={`${item.level}-${item.word}`}
        className={styles.word}>
        {item.word}
      </div>
    ));
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
  words: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapState = (state) => ({
  words: state.words.all,
});

export default connect(mapState)(Words);
