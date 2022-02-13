import clsx from 'clsx';
import { memo } from 'react';
import { createUseStyles } from 'react-jss';

import { Box } from '../../../../components';

import Title from './elements/title';

const useStyles = createUseStyles((theme) => ({
  contextMenu: {
    ...theme.common.window.border,
    background: theme.palette.primary.gray,
    position: 'absolute',
    bottom: `calc(${theme.common.window.bar.height} - 3px)`,
    height: '300px',
    width: '180px',
    marginLeft: '2px',
    zIndex: '10',
    overflow: 'hidden',
  },
  hidden: {
    display: 'none',
  },
}));

interface Props {
  isOpen: boolean;
}

const ContextMenu = ({ isOpen }: Props) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.contextMenu, !isOpen && classes.hidden)}>
      <Title />
    </Box>
  );
};

ContextMenu.displayName = 'ContextMenu';
export default memo(ContextMenu);
