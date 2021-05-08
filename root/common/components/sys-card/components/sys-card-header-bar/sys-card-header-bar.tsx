import React, { FunctionComponent, memo } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import Icon, { ICONS } from 'common/components/icon';
import Button from 'common/components/button';

import CustomIcon from 'common/components/icon/custom-icons/resize.svg';

interface SysCardHeaderBarProps {
  title: string;
  cardIcon: IconProp;
}

const SysCardHeaderBar: FunctionComponent<SysCardHeaderBarProps> = ({
  title,
  cardIcon,
}) => {
  return (
    <div className="sys-card-header-bar sys-card-header-bar--isActive">
      <div className="sys-card-header-bar__left-side">
        <Icon size="sm" icon={cardIcon} />
        <div className="sys-card-header-bar__title">{title}</div>
      </div>
      <div className="sys-card-header-bar__right-side">
        <Button size="small">
          <Icon size="sm" icon={ICONS.MINIMIZE} />
        </Button>
        <Button size="small">
          <Icon size="sm" icon={ICONS.MAXIMIZE} />
        </Button>
        <Button size="small">
          <CustomIcon />
        </Button>
      </div>
    </div>
  );
};

export default memo(SysCardHeaderBar);
