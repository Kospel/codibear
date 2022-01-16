import clsx from 'clsx';
import React, { memo } from 'react';

import { Box } from 'components/index';

import SysMenuHeader from './components/sys-menu-header';

interface Props {
  isOpen: boolean;
}

const SysMenu = ({ isOpen }: Props) => (
  <Box className={clsx('sys-menu', !isOpen && 'sys-menu__hidden')}>
    <SysMenuHeader />
  </Box>
);

export default memo(SysMenu);
