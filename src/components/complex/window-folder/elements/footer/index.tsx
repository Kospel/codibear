import { memo } from 'react';
import { createUseStyles } from 'react-jss';

import { Box } from '../../../../../components';

const useStyles = createUseStyles((theme) => ({
  footer: {
    height: '23px',
    margin: '2px',
    boxShadow: `inset 1px 1px 2px ${theme.palette.grayTones.gray5}`,
    borderBottom: `1px solid ${theme.palette.grayTones.gray3}`,
    borderRight: `1px solid {theme.palette.grayTones.gray3}`,
    lineHeight: '23px',
    paddingLeft: '5px',
    fontSize: '12px',
    paddingTop: '1px',
    userSelect: 'none',
  },
}));

interface Props {
  numberOfElements: number;
}

const Footer = ({ numberOfElements }: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>{`${numberOfElements} object(s)`}</Box>
  );
};

Footer.displayName = 'Footer';
export default memo(Footer);
