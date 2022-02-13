import { memo } from 'react';
import { createUseStyles } from 'react-jss';

import { Box } from '../../../../../../components';

const useStyles = createUseStyles((theme) => ({
  title: {
    background: theme.palette.grayTones.gray3,
    writingMode: 'vertical-rl',
    textOrientation: 'mixed',
    height: '100%',
    textAlign: 'start',
    paddingTop: '5px',
    transform: 'rotate(-180deg)',
    fontWeight: '900',
    color: theme.palette.primary.gray,
    fontSize: '26px',
    position: 'relative',
    boxSizing: 'border-box',
  },
}));

const Title = () => {
  const classes = useStyles();

  return <Box className={classes.title}>CODIBEAR</Box>;
};

Title.displayName = 'Title';
export default memo(Title);
