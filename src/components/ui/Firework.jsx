import React from 'react';
import PropTypes from 'prop-types';
import otherImg from '../../assets/winPrizeAnimation/other-bg.gif';
import thirdPrizeImg from '../../assets/winPrizeAnimation/thirdPrize-bg.gif';
import secondPrizeImg from '../../assets/winPrizeAnimation/secondPrize-bg.gif';
import jackpotImg from '../../assets/winPrizeAnimation/jackpot-bg.gif';

const Firework = ({ level }) => {
  const currentImg = () => {
    if (level === 'jackpot') return jackpotImg;

    if (level === 'secondPrize') return secondPrizeImg;

    if (level === 'thirdPrize') return thirdPrizeImg;

    return otherImg;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${
          currentImg()
        })`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',

        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        // backgroundColor: '#3D0806',
        opacity: '.25',
      }}

    />
  );
};

Firework.propTypes = {
  level: PropTypes.string.isRequired,
};

export default Firework;
