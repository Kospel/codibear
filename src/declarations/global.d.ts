// global.d.ts

import type { Theme as CustomTheme } from '../styles/theming';

declare global {
  namespace Jss {
    interface Theme extends CustomTheme {}
  }
}

export {};
