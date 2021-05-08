import React, { FunctionComponent, memo, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  size?: 'small';
}

const Button: FunctionComponent<ButtonProps> = ({ size, children }) => {
  const buttonClassSize = size ? `button--${size}` : '';
  const classNames = `button ${buttonClassSize}`;

  return <button className={classNames}>{children}</button>;
};

export default memo(Button);
