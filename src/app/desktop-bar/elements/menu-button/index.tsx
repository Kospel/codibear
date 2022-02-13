import { memo, useState } from 'react';
import { createUseStyles } from 'react-jss';

import Icon, { ICONS } from '../../../../components/core/icon';

import ContextMenu from '../context-menu';

const useStyles = createUseStyles((theme) => ({
  menuButton: {
    ...theme.common.button.border,
    ...theme.common.desktop.bar,
    background: theme.palette.primary.gray,
    borderTopColor: theme.palette.primary.white,
    borderLeftColor: theme.palette.primary.white,
    cursor: 'pointer',

    '&:active': {
      background: theme.palette.grayTones.gray1,
      borderWidth: '2px',
      marginTop: '3px',
      marginLeft: '3px',
      borderBottomColor: theme.palette.primary.white,
      borderRightColor: theme.palette.primary.white,
      borderTopColor: theme.palette.grayTones.gray2,
      borderLeftColor: theme.palette.grayTones.gray2,
    },
  },
  menuButtonIcon: {
    marginRight: '5px',
  },
}));

const MenuButton = () => {
  const classes = useStyles();
  const [isMenuOpen, toggleMenu] = useState<boolean>(false);

  return (
    <>
      <button
        className={classes.menuButton}
        onClick={() => toggleMenu(!isMenuOpen)}
      >
        <Icon size="xs" icon={ICONS.CODE} className={classes.menuButtonIcon} />
        Menu
      </button>
      <ContextMenu isOpen={isMenuOpen} />
    </>
  );
};

MenuButton.displayName = 'MenuButton';
export default memo(MenuButton);
