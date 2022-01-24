import { memo } from 'react';
import { createUseStyles } from 'react-jss';

import { Box } from 'components/index';

const useStyles = createUseStyles((theme) => ({
  bodyContainer: {
    width: 'calc(100% - 4px)',
    height: 'calc(100% - 77px)',
    marginLeft: '2px',
    marginRight: '2px',
    marginBottom: '2px',
    background: theme.palette.primary.white,
    boxSizing: 'border-box',
    boxShadow: `inset 1px 1px 2px ${theme.palette.grayTones.gray5}`,
    borderBottom: `1px solid ${theme.palette.grayTones.gray2}`,
    borderRight: `1px solid ${theme.palette.grayTones.gray2}`,
  },
}));

const BodyContainer = () => {
  const classes = useStyles();
  return <Box className={classes.bodyContainer} />;
};

BodyContainer.displayName = 'BodyContainer';
export default memo(BodyContainer);
