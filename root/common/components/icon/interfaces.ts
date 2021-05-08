import { FunctionComponent, SVGAttributes } from 'react';

import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

export interface IconProps {
  icon: IconProp;
  size?: SizeProp;
  className?: string;
}

export interface Icons {
  [key: string]: IconProp;
}

export interface CustomIcons {
  [key: string]: FunctionComponent<SVGAttributes<SVGAElement>>;
}
