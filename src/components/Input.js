import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../styles/Input.module.css';
import { listen } from '../redux/recognition/actions';

function Input({ heard, listen }) {
  return (
    <main className={styles.main}>
      <div className={styles.input}>
        {heard}
      </div>
      <button onClick={() => listen()}>Listen</button>
    </main>
  );
}

Input.propTypes = {
  heard: PropTypes.string.isRequired,
  listen: PropTypes.func.isRequired,
};

const mapState = () => ({
  heard: 'yo',
});

const mapDispatch = {
  listen,
};

export default connect(mapState, mapDispatch)(Input);
