import { memo, useCallback, useState } from 'react';

import Icon, { ICONS } from 'components/icon';

import SysMenu from '../sys-menu';

const SysMenuBtn = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  const handleOnClick = useCallback(() => {
    isMenuOpen ? toggleMenu(false) : toggleMenu(true);
  }, [isMenuOpen]);

  console.log({ isMenuOpen });

  return (
    <>
      <button className="sys-menu-btn" onClick={handleOnClick}>
        <Icon size="xs" icon={ICONS.CODE} className="sys-menu-btn__icon" />
        Menu
      </button>
      <SysMenu isOpen={isMenuOpen} />
    </>
  );
};

export default memo(SysMenuBtn);
