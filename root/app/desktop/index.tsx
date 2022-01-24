import { memo } from 'react';
import { createUseStyles } from 'react-jss';

import { Box } from 'components/index';
import { WithChildren } from 'utils/interface';

const useStyles = createUseStyles((theme) => ({
  desktop: {
    background: theme.common.desktop.background.primary,
    height: `calc(100vh - ${theme.common.window.bar.height})`,
  },
}));

const Desktop = ({ children }: WithChildren) => {
  const classes = useStyles();

  return <Box className={classes.desktop}>{children}</Box>;
};

Desktop.displayName = 'Desktop';
export default memo(Desktop);
