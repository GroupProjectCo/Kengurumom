import React from 'react';
import './Button.css';

function Button(props) {
  const {
    type, text, btnStyle, onClick, ...restProps
  } = props;

  const handleClick = () => {
    if (typeof onClick === 'function') onClick();
  };

  return (<button className={`button ${btnStyle}`} type={type} onClick={handleClick} {...restProps}>{text}</button>);
}

export default Button;
