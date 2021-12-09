import React from 'react';

import PropTypes from 'prop-types';

const Space = ({ children }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
  }}
  >
    {children}
  </div>
);

Space.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

};

export default Space;
