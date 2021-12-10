import React, { useCallback, useRef, useEffect } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import Space from './ui/Space';
import FlipNum from './flipNum/FlipNum';
import GoldAnimation from './ui/GoldAnimation';

// Utils
import {
  _getAmount,
  _getLevelClassName,
  _getFlipNumFontSize,
  _getFlipNumFontColor,
  _getFlipNumFontSizeTinyScreen,
  _getFlipNumFontSizeSmallScreen,
  _getFlipNumFontSizeMediumScreen,
  _getFlipNumFontSizeLargeScreen,
  _getFlipNumFontSizeSuperLargeScreen,
} from '../utils/helpers';

// Styles
import styles from './JackpotContent.module.scss';

const JackpotContent = () => {
  // Redux
  const { jackpotData } = useSelector((state) => state.jackpot);
  const { media: pointText } = useSelector((state) => state.mediaQuery);

  // Ref
  const fontSizeRef = useRef([]);
  const fontColorRef = useRef([]);

  const getFontSize = useCallback((mediaQueryText, level) => {
    switch (mediaQueryText) {
      case 'large':
        fontSizeRef.current.push(_getFlipNumFontSizeLargeScreen(level));
        break;

      case 'tiny':
        fontSizeRef.current.push(_getFlipNumFontSizeTinyScreen(level));
        break;

      case 'small':
        fontSizeRef.current.push(_getFlipNumFontSizeSmallScreen(level));
        break;

      case 'medium':
        fontSizeRef.current.push(_getFlipNumFontSizeMediumScreen(level));
        break;

      case 'superLarge':
        fontSizeRef.current.push(_getFlipNumFontSizeSuperLargeScreen(level));
        break;

      default:
        fontSizeRef.current.push(_getFlipNumFontSize(level));
        break;
    }
  }, []);

  const getFontColor = useCallback((level) => {
    const currentColor = _getFlipNumFontColor(level);
    fontColorRef.current.push(currentColor);
  }, []);

  const FlipNumEl = jackpotData && Object.keys(jackpotData).map((el, index) => {
    const { level, jackpot } = jackpotData[el];

    const currentClassName = _getLevelClassName(level);

    if (!currentClassName) return;

    if (fontSizeRef.current.length < 4) {
      getFontSize(pointText, currentClassName);
      getFontColor(currentClassName);
    }

    return (
      <div className={styles[currentClassName]} key={currentClassName}>
        <Space>
          <span
            style={{
              fontSize: fontSizeRef.current[index],
              color: fontColorRef.current[index],
            }}
            className={styles.symbol}
          >
            $
          </span>

          <FlipNum
            point={pointText}
            count={_getAmount(jackpot)}
            level={currentClassName}
            styles={{
              fontSize: fontSizeRef.current[index],
              color: fontColorRef.current[index],
            }}
          />
        </Space>
      </div>

    );
  });

  useEffect(() => {
    const reSizeHandler = () => {
      fontSizeRef.current = [];
    };

    window.addEventListener('resize', reSizeHandler);

    return () => {
      window.removeEventListener('resize', reSizeHandler);
    };
  }, []);

  return (
    <div className={styles.container}>
      <GoldAnimation />
      <div className={styles['content-box']}>
        { FlipNumEl }
      </div>

    </div>
  );
};

export default React.memo(JackpotContent);
