import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextAnimation.module.scss';

const TextAnimation = ({ machineNum }) => (
  <div className={styles['text-hero']}>
    <h1 className={styles.text}>{machineNum}</h1>
  </div>
);

TextAnimation.propTypes = {
  machineNum: PropTypes.string.isRequired,
};

export default TextAnimation;
