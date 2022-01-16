import React, { memo } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { ICONS } from 'components/icon';
import { Box, Icon, Button } from 'components/index';

interface Props {
  title: string;
  cardIcon: IconProp;
}

const SysCardHeaderBar = ({ title, cardIcon }: Props) => {
  return (
    <Box className="sys-card-header-bar sys-card-header-bar--isActive">
      <Box className="sys-card-header-bar__left-side">
        <Icon size="sm" icon={cardIcon} />
        <Box className="sys-card-header-bar__title">{title}</Box>
      </Box>
      <Box className="sys-card-header-bar__right-side">
        <Button size="small">
          <Icon size="sm" icon={ICONS.MINIMIZE} />
        </Button>
        <Button size="small">
          <Icon size="sm" icon={ICONS.MAXIMIZE} />
        </Button>
        <Button size="small">
          <Icon size="sm" icon={ICONS.CLOSE} />
        </Button>
      </Box>
    </Box>
  );
};

export default memo(SysCardHeaderBar);
