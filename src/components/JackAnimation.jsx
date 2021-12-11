import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

// Components
import FlipNum from './flip-num/FlipNum';
import TextAnimation from './ui/TextAnimation';
import Firework from './ui/Firework';
import JackpotHandPay from './JackpotHandPay';

// Utile
import { _getAmount } from '../utils/helpers';

// Styles
import styles from './JackpotAnimation.module.scss';

const JackpotPrizeAnimation = ({ playAnimationItem }) => {
  if (!playAnimationItem) {
    playAnimationItem = {
      id: 123456789,
      amountWinning: 100,
      inserId: 1394,
      cashInStatus: 'padding',
      uuid: '12428479s',
      ip: '192.168.10.30',
      level: 'jackpot',
      //   level: 'secondPrize',
      //   level: 'thirdPrize',
      //   level: 'fourthPrize',
      // level: 'fifthPrize',
      // level: 'sixthPrize',
    };
  }
  // Init State
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!playAnimationItem?.amountWinning) return;

    setCount(_getAmount(+playAnimationItem.amountWinning));
  }, [playAnimationItem]);

  return (
    <div className={styles.container}>
      <div level={playAnimationItem?.level} className={styles['animation-box']}>
        <div
          level={playAnimationItem?.level}
          className={styles['text-animation-box']}
        >
          <TextAnimation machineNum={playAnimationItem?.name} />
        </div>
        <div className={styles['win-number-box']} level={playAnimationItem?.level}>
          <span
            style={{
              textShadow: '6px 10px 4px #000',
              fontSize: '9rem',
            }}
            level={playAnimationItem?.level}
          >
            $
          </span>
          <FlipNum
            size={playAnimationItem?.level}
            level={playAnimationItem?.level}
            count={count}
            styles={{
              textShadow: '6px 10px 4px #000',
              padding: '.1em .3em',
              fontSize: '9rem',
            //   lineHeight: 1.2,
            }}
          />
        </div>
        <Firework level={playAnimationItem?.level} />
      </div>
      <JackpotHandPay
        cashInStatus={playAnimationItem.cashInStatus}
        uuid={playAnimationItem.id}
        insertId={playAnimationItem.inserId}
      />
    </div>
  );
};

JackpotPrizeAnimation.propTypes = {
  playAnimationItem: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    cashInStatus: PropTypes.string,
    level: PropTypes.string,
    amountWinning: PropTypes.number,
    inserId: PropTypes.number,
  }).isRequired,

};

export default React.memo(JackpotPrizeAnimation);
