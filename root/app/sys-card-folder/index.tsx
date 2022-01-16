import React, { memo } from 'react';

import SysCard from 'app/sys-card';
import { ICONS } from 'components/icon';

import SysCardFolderFooter from './components/sys-card-folder-footer';
import SysCardFolderActionsBar from './components/sys-card-folder-actions-bar';
import SysCardFolderBodyContainer from './components/sys-card-folder-body-container';

interface Props {
  folderTitle: string;
}

const SysCardFolder = ({ folderTitle }: Props) => (
  <SysCard cardTitle={folderTitle} cardIcon={ICONS.FOLDER}>
    <SysCardFolderActionsBar />
    <SysCardFolderBodyContainer />
    <SysCardFolderFooter numberOfElements={0} />
  </SysCard>
);

export default memo(SysCardFolder);
