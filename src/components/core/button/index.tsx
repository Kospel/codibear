import clsx from 'clsx';
import { memo } from 'react';
import { createUseStyles } from 'react-jss';

import { WithChildren } from '../../../utils/interface';

const useStyles = createUseStyles((theme) => ({
  button: {
    ...theme.common.button.border,
    marginLeft: '3px',
    background: theme.palette.primary.gray,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:active': {
      background: theme.palette.grayTones.gray1,
      borderBottomColor: theme.palette.primary.white,
      borderRightColor: theme.palette.primary.white,
      borderTopColor: theme.palette.grayTones.gray2,
      borderLeftColor: theme.palette.grayTones.gray2,
    },
  },
  small: {
    width: '20px',
    height: '20px',
    padding: '0',
  },
}));

interface Props {
  size?: 'small';
  onClick?: (props?: unknown) => unknown;
}

const Button = ({ children, size, onClick }: WithChildren<Props>) => {
  const classes = useStyles();

  return (
    <button
      onClick={onClick}
      className={clsx(classes.button, size && classes[size])}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';
export default memo(Button);
