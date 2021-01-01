import { render } from '@testing-library/react';
import React, { PureComponent } from 'react'

// It does not much more than a common button but just in case we need something more at some point
const Button = ({isDisabled=false, className, children, onClick}) => {
  return (
    <button disabled={isDisabled} className={`button ${className?className:""}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;