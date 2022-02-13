import { memo, CSSProperties } from 'react';
import { createUseStyles } from 'react-jss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Box } from '../../../components';
import { WithChildren } from '../../../utils/interface';

import WindowBar from './elements/window-bar';

export interface StyleProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  top: CSSProperties['top'];
  left: CSSProperties['left'];
}

const useStyles = createUseStyles((theme) => ({
  windowCard: {
    ...theme.common.window.border,
    width: ({ width }: StyleProps) => width,
    height: ({ height }: StyleProps) => height,
    top: ({ top }: StyleProps) => top,
    left: ({ left }: StyleProps) => left,
    position: 'absolute',
    background: theme.palette.primary.gray,
  },
}));

interface Props extends StyleProps {
  windowTitle: string;
  windowIcon: IconProp;
  isWindowActive: boolean;
}

const WindowCard = ({
  children,
  isWindowActive,
  windowTitle,
  windowIcon,
  width,
  height,
  top,
  left,
}: WithChildren<Props>) => {
  const classes = useStyles({ width, height, top, left });

  return (
    <Box className={classes.windowCard}>
      <WindowBar
        windowTitle={windowTitle}
        windowIcon={windowIcon}
        isWindowActive={isWindowActive}
      />
      {children}
    </Box>
  );
};

WindowCard.displayName = 'WindowCard';
export default memo(WindowCard);
