import deepmerge from 'deepmerge';
import colors from 'color-name';

export const foundations = {
  easing: 'ease',
  colors: {
    black: '#201e1f',
    darkGray: '#a6a6a6',
    gray: '#eaeaea',
    lightGray: '#f0f0f0',
    white: '#ffffff',
    green: '#64CB29',
    blue: '#2d9ee0',
    rose: '#f45b69',
    cerise: '#f00faa',
    red: '#ed6a5a',
    orange: '#edae49',
    yellow: '#e4ce44',
    lightRed: '#cc998d',
    darkPurple: '#303965',
  },
  type: {
    fontSize: {
      base: 24,
      remBase: 24,
      body: 13,
      bodySmaller: 12,
    },
    fontFamily: {
      default:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
  },
};

const theme = deepmerge(foundations, {
  isSystem: false,
  colors: {
    primary: foundations.colors.green,
    secondary: foundations.colors.blue,
    tertiary: foundations.colors.rose,

    bg: foundations.colors.white,
    offBg: foundations.colors.lightGray,
    font: foundations.colors.black,
    offFont: foundations.colors.darkGray,
    border: foundations.colors.gray,
    offBorder: foundations.colors.lightGray,

    headerBg: foundations.colors.white,
  },
  shadow: {
    color: foundations.colors.black,
    opacity: 0.1,
  },
  editor: {
    fontFamily: {
      default: 'JetBrains Mono',
    },
    fontSize: foundations.type.fontSize.bodySmaller,
    colors: {
      comment: foundations.colors.darkGray,
      string: foundations.colors.orange,
      number: foundations.colors.orange,
      variable: foundations.colors.black,
      keyword: foundations.colors.blue,
      atom: foundations.colors.black,
      attribute: foundations.colors.green,
      property: foundations.colors.blue,
      punctuation: foundations.colors.blue,
      definition: foundations.colors.orange,
      builtin: foundations.colors.orange,
      cursor: foundations.colors.blue,
    },
  },
});

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

export type ITheme = typeof theme;
export type ICustomTheme = RecursivePartial<ITheme>;

interface RGBA {
  r: number;
  g: number;
  b: number;
  a?: number;
}

const colorOrHexToRgb = (hex: string): RGBA | undefined => {
  const rgb = colors[hex as keyof typeof colors];
  if (rgb) {
    return {
      r: rgb[0],
      g: rgb[1],
      b: rgb[2],
    };
  }
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result || result.length < 4) {
    return;
  }

  return {
    r: parseInt(result[1] ?? '', 16),
    g: parseInt(result[2] ?? '', 16),
    b: parseInt(result[3] ?? '', 16),
  };
};

export const hexToRgbStr = (hex: string) => {
  if (!hex) {
    return '';
  }

  const rgb = colorOrHexToRgb(hex);
  if (!rgb) {
    return '';
  }

  const { r, g, b } = rgb;

  return `${r}, ${g}, ${b}`;
};

// shade one of our rgb color objects to a distance of i*10%
// ({ red: 80, green: 18, blue: 20 }, 1) => { red: 72, green: 16, blue: 18 }
const rgbShade = (rgb: RGBA, i: number) => {
  return {
    r: rgb.r * (1 - 0.1 * i),
    g: rgb.g * (1 - 0.1 * i),
    b: rgb.b * (1 - 0.1 * i),
  };
};

// tint one of our rgb color objects to a distance of i*10%
// ({ red: 80, green: 18, blue: 20 }, 1) => { red: 98, green: 42, blue: 44 }
const rgbTint = (rgb: RGBA, i: number) => {
  return {
    r: rgb.r + (255 - rgb.r) * i * 0.1,
    g: rgb.g + (255 - rgb.g) * i * 0.1,
    b: rgb.b + (255 - rgb.b) * i * 0.1,
  };
};

export const mergeThemes = (...customThemes: ICustomTheme[]): ICustomTheme => {
  return deepmerge.all(customThemes);
};

export const createTheme = (
  customTheme: ICustomTheme,
  extraTheme: ICustomTheme = {}
): ITheme => {
  return deepmerge.all([theme, customTheme, extraTheme]) as ITheme;
};
