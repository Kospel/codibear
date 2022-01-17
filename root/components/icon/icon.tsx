import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconProp;
  size?: SizeProp;
  className?: string;
}

const Icon = ({ icon, size, className }: Props) => (
  <FontAwesomeIcon className={className} size={size} icon={icon} />
);

export default memo(Icon);
