import { memo } from 'react';

import { Box } from 'components/index';

import { AVAILABLE_LANGUAGE } from './consts';

const SysLanguage = () => (
  <Box className="sys-language">{AVAILABLE_LANGUAGE[0]}</Box>
);

export default memo(SysLanguage);
