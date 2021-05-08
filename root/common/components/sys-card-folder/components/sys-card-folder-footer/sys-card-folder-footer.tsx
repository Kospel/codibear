import React, { FunctionComponent, memo } from 'react';

interface SysCardFolderFooterProps {
  numberOfElements: number;
}

const SysCardFolderFooter: FunctionComponent<SysCardFolderFooterProps> = ({
  numberOfElements,
}) => {
  return (
    <div className="sys-card-folder-footer">
      {`${numberOfElements} object(s)`}
    </div>
  );
};

export default memo(SysCardFolderFooter);
