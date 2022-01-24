import { useState, memo, useEffect } from 'react';

import { Box } from 'components/index';
import { createUseStyles } from 'react-jss';

import { getTime, clockTicking } from './utils';

const useStyles = createUseStyles((theme) => ({
  clock: {
    ...theme.common.desktop.bar,
    display: 'inline-block',
    border: '2px solid',
    borderBottomColor: theme.palette.primary.white,
    borderRightColor: theme.palette.primary.white,
    borderTopColor: theme.palette.grayTones.gray4,
    borderLeftColor: theme.palette.grayTones.gray4,
    marginRight: '2px',
    background: theme.palette.grayTones.gray1,
    padding: '0 10px',
  },
}));

const Clock = () => {
  const classes = useStyles();
  const [clock, setClock] = useState<string>(getTime());

  useEffect(() => {
    clockTicking(setClock);
  }, [clock]);

  return <Box className={classes.clock}>{clock}</Box>;
};

Clock.displayName = 'Clock';
export default memo(Clock);
