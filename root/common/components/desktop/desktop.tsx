import React, { FunctionComponent, memo, ReactNode } from 'react';

interface DesktopProps {
  children: ReactNode;
}

const Desktop: FunctionComponent<DesktopProps> = ({ children }) => (
  <div className="desktop">{children}</div>
);

export default memo(Desktop);
