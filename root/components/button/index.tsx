import clsx from 'clsx';
import { memo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  size?: 'small';
}

const Button = ({ size, children }: Props) => (
  <button className={clsx('button', size && `button--${size}`)}>
    {children}
  </button>
);

export default memo(Button);
