import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useOdometer from '../../hooks/useOdometer';
import '../../sass/odometer.scss';

const FlipNum = ({
  count, styles,
}) => {
  const targetRef = useRef();

  const odometerOptions = {
    duration: 300,
    format: '(,ddd).dddd',
  };

  useOdometer(targetRef, count, odometerOptions);

  return (
    <p
      ref={targetRef}
      style={{
        fontWeight: 'bold',
        textShadow: '2px 2px 6px #f6db6e, 2px 2px 6px #ff0000',
        ...styles,
      }}
    />
  );
};

FlipNum.propTypes = {
  count: PropTypes.number.isRequired,
  styles: PropTypes.shape(),
};

FlipNum.defaultProps = {
  styles: {},
};

export default FlipNum;
