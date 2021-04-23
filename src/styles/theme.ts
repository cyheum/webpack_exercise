export const color = {
  pink: {
    500: '#ff116e',
  },
  purple: {
    10: '#faf6ff',
    50: '#f0e5ff',
    100: '#e5d1ff',
    200: '#c6a0f7',
    300: '#9e64e6',
    400: '#8137d6',
    500: '#6415b7',
    600: '#510f9d',
    700: '#3e0a7d',
    800: '#270757',
    900: '#190636',
    1000: '#0f051e',
  },
  gray: {
    100: '#f1f4f7',
    200: '#dee1e3',
    300: '#babec2',
    400: '#9da1a6',
    500: '#7f8387',
    600: '#65686b',
    700: '#4a4c4f',
    800: '#2d2f30',
    900: '#1d1e1f',
    1000: '#141414',
    1100: '#000000',
  },
};

export const btnTheme = {
  primaryBtnTheme: {
    enableBgColor: color.purple[500],
    enableBorder: '#5912a4',
    enableColor: '#fff',
    hoverBgColor: '#732cbe',
    hoverBorder: '#6727aa',
    activeBgColor: '#5912a4',
    activeBorder: '#4f1093',
    disabledBgColor: color.gray[300],
    disabledBorder: '#a9acb0',
  },
  subBtnTheme: {
    enableBgColor: '#fff',
    enableBorder: color.purple[500],
    enableColor: color.purple[500],
    hoverBgColor: '#f3ebfb',
    activeBgColor: color.purple[500],
    activeBorder: '#5912a4',
    activeColor: '#fff',
    disabledBgColor: color.gray[100],
    disabledBorder: '#d9dddf',
    disabledColor: '#c1c3c4',
  },
  monoBtnTheme: {
    enableBgColor: '#fff',
    enableBorder: color.gray[300],
    enableColor: color.gray[500],
  },
};

const size = {
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1200px',
  desktop: '1440px',
  desktopL: '2560px',
};

export const device = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};

const theme = {
  color,
  device,
};

export default theme;
