import React, { memo, ReactNode, CSSProperties } from 'react';

interface Props extends CSSProperties {
  children?: ReactNode;
  className?: string;
  onClick?: (props?: unknown) => unknown;
}

const Box = (props: Props) => {
  const { children, className, onClick, ...rest } = props;

  return (
    <div className={className} style={rest} onClick={onClick}>
      {children}
    </div>
  );
};

export default memo(Box);
