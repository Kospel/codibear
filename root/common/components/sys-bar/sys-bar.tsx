import React, { FunctionComponent, memo } from 'react';

import SysMenuBtn from './components/sys-menu-btn';
import SysLanguage from './components/sys-language';
import SysClock from './components/sys-clock';

const SysBar: FunctionComponent = () => (
  <div className="sys-bar">
    <div className="sys-bar__left-side">
      <SysMenuBtn />
    </div>
    <div className="sys-bar__right-side">
      <SysLanguage />
      <SysClock />
    </div>
  </div>
);

export default memo(SysBar);
