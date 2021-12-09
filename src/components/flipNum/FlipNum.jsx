import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useOdometer from '../../hooks/useOdometer';
import '../../sass/odometer.scss';

// Utils
import {
  _getFlipNumFontColor,
} from '../../utils/helpers';

const FlipNum = ({
  count, level, styles,
}) => {
  const targetRef = useRef();

  const odometerOptions = {
    duration: 300,
    format: '(,ddd).dddd',
  };

  const color = _getFlipNumFontColor(level);

  useOdometer(targetRef, count, odometerOptions);

  return (
    <div>
      <p
        ref={targetRef}
        style={{
          color,
          fontWeight: 'bold',
          textShadow: '2px 2px 6px #f6db6e, 2px 2px 6px #ff0000',
          ...styles,
        }}
      />
    </div>
  );
};

FlipNum.propTypes = {
  count: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  styles: PropTypes.shape(),
};

FlipNum.defaultProps = {
  styles: {},
};

export default FlipNum;
