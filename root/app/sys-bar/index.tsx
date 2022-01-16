import React, { memo } from 'react';

import { Box } from 'components/index';

import SysClock from './components/sys-clock';
import SysMenuBtn from './components/sys-menu-btn';
import SysLanguage from './components/sys-language';

const SysBar = () => (
  <Box className="sys-bar">
    <Box className="sys-bar__left-side">
      <SysMenuBtn />
    </Box>
    <Box className="sys-bar__right-side">
      <SysLanguage />
      <SysClock />
    </Box>
  </Box>
);

export default memo(SysBar);
