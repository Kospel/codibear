import React, { FunctionComponent, memo } from 'react';

import SysMenuHeader from './components/sys-menu-header';

interface SysMenuProps {
  isOpen: boolean;
}

const SysMenu: FunctionComponent<SysMenuProps> = ({ isOpen }) => {
  const classNames = isOpen ? 'sys-menu' : 'sys-menu sys-menu__hidden';

  return (
    <div className={classNames}>
      <SysMenuHeader />
    </div>
  );
};

export default memo(SysMenu);
