import { memo } from 'react';
import { createUseStyles } from 'react-jss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { ICONS } from '../../../../core/icon';
import { Box, Icon, Button } from '../../../../../components';

interface StyleProps {
  isWindowActive: boolean;
}

const useStyles = createUseStyles((theme) => ({
  windowBar: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    color: theme.palette.primary.white,
    width: '100%',
    height: '25px',
    padding: '0 3px 0 5px',
    boxSizing: 'border-box',
    background: ({ isWindowActive }: StyleProps) =>
      isWindowActive
        ? theme.palette.primary.blue
        : theme.palette.grayTones.gray3,
  },
  windowSection: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  windowTitle: {
    color: ({ isWindowActive }: StyleProps) =>
      !isWindowActive && theme.palette.primary.gray,
    marginLeft: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
    userSelect: 'none',
  },
}));

interface Props extends StyleProps {
  windowTitle: string;
  windowIcon: IconProp;
}

const WindowBar = ({ windowTitle, windowIcon, isWindowActive }: Props) => {
  const classes = useStyles({ isWindowActive });

  return (
    <Box className={classes.windowBar}>
      <Box className={classes.windowSection}>
        <Icon size="sm" icon={windowIcon} />
        <Box className={classes.windowTitle}>{windowTitle}</Box>
      </Box>
      <Box className={classes.windowSection}>
        <Button size="small">
          <Icon size="sm" icon={ICONS.MINIMIZE} />
        </Button>
        <Button size="small">
          <Icon size="sm" icon={ICONS.MAXIMIZE} />
        </Button>
        <Button size="small">
          <Icon size="sm" icon={ICONS.CLOSE} />
        </Button>
      </Box>
    </Box>
  );
};

WindowBar.displayName = 'WindowBar';
export default memo(WindowBar);
