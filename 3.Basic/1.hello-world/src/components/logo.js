import React from 'react';

const Logo = props => {
  return (
    <div className="logo">
      <a href="#">{props.title}</a>
    </div>
  );
};

Logo.defaultProps = {
  title: 'Home'
};

export default Logo;
