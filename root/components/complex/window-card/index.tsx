import { memo, CSSProperties } from 'react';
import { createUseStyles } from 'react-jss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Box } from 'components/index';
import { WithChildren } from 'utils/interface';

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

// function dragElement(elmnt) {
//   var pos1 = 0,
//     pos2 = 0,
//     pos3 = 0,
//     pos4 = 0;
//   if (document.getElementById(elmnt.id + 'header')) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
//     elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
//   }

//   function closeDr'$primary-gray',agElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

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
  // useEffect(() => {
  //   dragElement(document.querySelector('.sys-card'));
  // }, []);

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
