import React, { FunctionComponent, memo, useCallback, useState } from 'react';

import Icon, { ICONS } from 'common/components/icon';

import SysMenu from '../sys-menu';

const SysMenuBtn: FunctionComponent = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  const handleOnClick = useCallback(() => {
    isMenuOpen ? toggleMenu(false) : toggleMenu(true);
  }, [isMenuOpen]);

  return (
    <>
      <button className="sys-menu-btn" onClick={handleOnClick}>
        <Icon size="xs" icon={ICONS.CODE} className="sys-menu-btn__icon" />
        Codibear
      </button>
      <SysMenu isOpen={isMenuOpen} />
    </>
  );
};

export default memo(SysMenuBtn);
