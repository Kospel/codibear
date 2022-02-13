import { memo } from 'react';
import { createUseStyles } from 'react-jss';

import { Box } from '../../../../components';

import { AVAILABLE_LANGUAGE } from './consts';

const useStyles = createUseStyles((theme) => ({
  language: {
    ...theme.common.desktop.bar,
    lineHeight: '23px',
    background: theme.palette.primary.blue,
    color: theme.palette.primary.white,
    marginRight: '5px',
    padding: '0 3px',
  },
}));

const Language = () => {
  const classes = useStyles();

  return <Box className={classes.language}>{AVAILABLE_LANGUAGE[0]}</Box>;
};

Language.displayName = 'Language';
export default memo(Language);
