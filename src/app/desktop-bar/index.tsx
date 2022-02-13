import { memo } from 'react';
import { createUseStyles } from 'react-jss';

import { Box } from '../../components';

import Clock from './elements/clock';
import Language from './elements/language';
import MenuButton from './elements/menu-button';

const useStyles = createUseStyles((theme) => ({
  desktopBar: {
    display: 'flex',
    justifyContent: 'space-between',
    background: theme.palette.primary.gray,
    height: theme.common.window.bar.height,
    borderTop: `2px solid ${theme.palette.primary.gray}`,
    boxSizing: 'border-box',
    boxShadow: 'inset 0 1px 2px -1px rgba(0, 0, 0, 0.4)',
  },
  menuSection: {},
  informationSection: {
    display: 'flex',
  },
}));

const DesktopBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.desktopBar}>
      <Box className={classes.menuSection}>
        <MenuButton />
      </Box>
      <Box className={classes.informationSection}>
        <Language />
        <Clock />
      </Box>
    </Box>
  );
};

DesktopBar.displayName = 'DesktopBar';
export default memo(DesktopBar);
