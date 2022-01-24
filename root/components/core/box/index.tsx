import { memo, CSSProperties } from 'react';

import { WithChildren } from 'utils/interface';

interface Props extends CSSProperties {
  className?: string;
  onClick?: (props?: unknown) => unknown;
}

const Box = (props: WithChildren<Props>) => {
  const { children, className, onClick, ...rest } = props;

  return (
    <div className={className} style={rest} onClick={onClick}>
      {children}
    </div>
  );
};

Box.displayName = 'Box';
export default memo(Box);
