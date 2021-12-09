import React from 'react';

// Components
import JackpotContent from '../components/JackpotContent';

// Styles
import styles from './OverView.module.scss';

const OverView = () => (
  <main className={styles.container}>
    <div className={styles['content-box']}>
      <JackpotContent />
    </div>
  </main>
);

export default OverView;
