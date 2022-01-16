import React, { memo, ReactNode } from 'react';

import { Box } from 'components/index';

interface Props {
  children: ReactNode;
}

const Desktop = ({ children }: Props) => (
  <Box className="desktop">{children}</Box>
);

export default memo(Desktop);
