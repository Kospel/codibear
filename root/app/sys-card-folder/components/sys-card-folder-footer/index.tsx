import { memo } from 'react';

import { Box } from 'components/index';

interface Props {
  numberOfElements: number;
}

const SysCardFolderFooter = ({ numberOfElements }: Props) => (
  <Box className="sys-card-folder-footer">
    {`${numberOfElements} object(s)`}
  </Box>
);

export default memo(SysCardFolderFooter);
