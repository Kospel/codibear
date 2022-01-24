import { memo } from 'react';
import { createUseStyles } from 'react-jss';

import { Box } from 'components/index';

const useStyles = createUseStyles({
  actionsBar: {
    height: '25px',
    width: '100%',
  },
});

const ActionsBar = () => {
  const classes = useStyles();
  return <Box className={classes.actionsBar} />;
};

ActionsBar.displayName = 'ActionsBar';
export default memo(ActionsBar);
