import React, { useCallback, useRef, useEffect } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import Space from './ui/Space';
import FlipNum from './flipNum/FlipNum';

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
  console.log('content');
  // Redux
  const { jackpotData } = useSelector((state) => state.jackpot);
  const { media: pointText } = useSelector((state) => state.mediaQuery);

  // Ref
  const fontSizeRef = useRef([]);

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

  const FlipNumEl = jackpotData && Object.keys(jackpotData).map((el, index) => {
    const { level, jackpot } = jackpotData[el];

    const currentClassName = _getLevelClassName(level);

    if (!currentClassName) return;

    const color = _getFlipNumFontColor(currentClassName);

    if (fontSizeRef.current.length < 4) {
      getFontSize(pointText, currentClassName);
    }

    return (
      <div className={styles[currentClassName]} key={currentClassName}>
        <Space>
          let fontSize;
          <span
            style={{
              fontSize: fontSizeRef.current[index],
              color,
            }}
            className={styles.symbol}
          >
            $
          </span>

          <FlipNum
            point={pointText}
            count={_getAmount(jackpot)}
            level={currentClassName}
            styles={{ fontSize: fontSizeRef.current[index] }}

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
    <>
      { FlipNumEl }
    </>
  );
};

export default React.memo(JackpotContent);
