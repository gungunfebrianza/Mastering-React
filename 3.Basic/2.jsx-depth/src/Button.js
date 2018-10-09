import React from 'react';

const Button = props => {
  const displayClasses = type => {
    switch (type) {
      case 'success':
        return 'btn success';
      case 'info':
        return 'btn info';
      case 'danger':
        return 'btn danger';
      default:
        break;
    }
  };
  return (
    <button className={displayClasses(props.type)}>
      {props.title + ` ${props.type}`}
    </button>
  );
};

Button.defaultProps = {
  title: 'Click Me'
};

export default Button;
