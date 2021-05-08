import {
  faCode,
  faFolder,
  faTimes,
  faWindowMinimize,
} from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';

import ResizeIcon from './custom-icons/resize.svg';
import { Icons, CustomIcons } from './interfaces';

export const ICONS: Icons = {
  CODE: faCode,
  FOLDER: faFolder,
  CLOSE: faTimes,
  MINIMIZE: faWindowMinimize,
  MAXIMIZE: faWindowMaximize,
};

export const CUSTOM_ICONS: CustomIcons = {
  RESIZE: ResizeIcon,
};
