import React from 'react';
import PropTypes from 'prop-types';

const Logo = props => {
  return (
    <div className="logo">
      <a href="#">{props.title}</a>
    </div>
  );
};

// Logo.defaultProps = {
//   title: 'Home'
// };

Logo.propTypes = {
  title: PropTypes.string
};

export default Logo;
