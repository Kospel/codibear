import { memo } from 'react';

import WindowCard, {
  StyleProps as WindowFolderStyleProps,
} from 'components/complex/window-card';
import { ICONS } from 'components/core/icon';

import Footer from './elements/footer';
import ActionsBar from './elements/actions-bar';
import BodyContainer from './elements/body-container';

interface Props extends WindowFolderStyleProps {
  folderTitle: string;
  isWindowActive: boolean;
}

const WindowFolder = ({ folderTitle, ...rest }: Props) => (
  <WindowCard windowIcon={ICONS.FOLDER} windowTitle={folderTitle} {...rest}>
    <ActionsBar />
    <BodyContainer />
    <Footer numberOfElements={0} />
  </WindowCard>
);

WindowFolder.displayName = 'WindowFolder';
export default memo(WindowFolder);
