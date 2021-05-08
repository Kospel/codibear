import React, { FunctionComponent, memo } from 'react';

import { AVAILABLE_LANGUAGE } from './consts';

const SysLanguage: FunctionComponent = () => {
  return <div className="sys-language">{AVAILABLE_LANGUAGE[0]}</div>;
};

export default memo(SysLanguage);
