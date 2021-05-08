import React, { FunctionComponent, memo } from 'react';

import SysCard from 'common/components/sys-card';
import { ICONS } from 'common/components/icon';

import SysCardFolderActionsBar from './components/sys-card-folder-actions-bar';
import SysCardFolderBodyContainer from './components/sys-card-folder-body-container';
import SysCardFolderFooter from './components/sys-card-folder-footer';

interface SysCardFolderProps {
  folderTitle: string;
}

const SysCardFolder: FunctionComponent<SysCardFolderProps> = ({
  folderTitle,
}) => {
  return (
    <SysCard cardTitle={folderTitle} cardIcon={ICONS.FOLDER}>
      <SysCardFolderActionsBar />
      <SysCardFolderBodyContainer />
      <SysCardFolderFooter numberOfElements={0} />
    </SysCard>
  );
};

export default memo(SysCardFolder);
