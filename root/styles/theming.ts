import { CSSProperties } from 'react';

export interface Theme {
  palette: {
    primary: {
      blue: CSSProperties['color'];
      gray: CSSProperties['color'];
      white: CSSProperties['color'];
      black: CSSProperties['color'];
    };
    grayTones: {
      gray1: CSSProperties['color'];
      gray2: CSSProperties['color'];
      gray3: CSSProperties['color'];
      gray4: CSSProperties['color'];
      gray5: CSSProperties['color'];
    };
  };
  common: {
    window: {
      border: {
        border: CSSProperties['border'];
        borderTopColor: CSSProperties['borderTopColor'];
        borderLeftColor: CSSProperties['borderLeftColor'];
        borderBottomColor: CSSProperties['borderBottomColor'];
        borderRightColor: CSSProperties['borderRightColor'];
        boxShadow: CSSProperties['boxShadow'];
      };
      bar: {
        height: CSSProperties['height'];
      };
    };
    desktop: {
      background: {
        primary: CSSProperties['color'];
      };
      bar: {
        height: CSSProperties['height'];
        marginLeft: CSSProperties['marginLeft'];
        marginBottom: CSSProperties['marginBottom'];
        marginTop: CSSProperties['marginTop'];
        boxSizing: CSSProperties['boxSizing'];
      };
    };
    button: {
      border: {
        borderTopColor: CSSProperties['borderTopColor'];
        borderLeftColor: CSSProperties['borderLeftColor'];
        borderBottomColor: CSSProperties['borderBottomColor'];
        borderRightColor: CSSProperties['borderRightColor'];
      };
    };
  };
}

export const theme: Theme = {
  palette: {
    primary: {
      blue: '#00008b',
      gray: '#c0c0c0',
      white: '#ffffff',
      black: '#000000',
    },
    grayTones: {
      gray1: '#aaaaaa',
      gray2: '#999999',
      gray3: '#777777',
      gray4: '#555555',
      gray5: '#222222',
    },
  },
  common: {
    window: {
      border: {
        border: '2px solid',
        borderTopColor: '#fff',
        borderLeftColor: '#fff',
        borderBottomColor: '#999',
        borderRightColor: '#999',
        boxShadow: '1px 1px #000',
      },
      bar: {
        height: '30px',
      },
    },
    desktop: {
      background: {
        primary: '#378180',
      },
      bar: {
        height: 'calc(100% - 5px)',
        marginLeft: '2px',
        marginBottom: '2px',
        marginTop: '2px',
        boxSizing: 'border-box',
      },
    },
    button: {
      border: {
        borderTopColor: '#fff',
        borderLeftColor: '#fff',
        borderBottomColor: '#000',
        borderRightColor: '#000',
      },
    },
  },
};
