const palette = {
  primary: {
    light: '#FF4863',
    main: '#FF4863',
    dark: '#FF4863',
    contrastText: '#fff',
  },
  secondary: {
    light: '#6200FC',
    main: '#6200FC',
    dark: '#6200FC',
    contrastText: '#fff',
  },
  
  error: {
    light: '#ff867c',
    main: '#ff5c5c',
    dark: '#c51162',
    contrastText: '#fff',
  },
  warning: {
    light: '#ffd740',
    main: '#ffc400',
    dark: '#ffab00',
    contrastText: '#000',
  },
  success: {
    light: '#81c784',
    main: '#4caf50',
    dark: '#388e3c',
    contrastText: '#fff',
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#bdbdbd',
    hint: '#9e9e9e',
  },
  background: {
    default: '#fff',
    paper: '#f5f5f5',
    hover: '#e0e0e0',
  },

};

export const lightTheme = palette

export const darkTheme = {
  ...palette,
  background: {
    ...palette.background,
    default: '#141415',
    paper: '#1E1E1EED',
    hover: '#FFFFFF0D',
  },
  text: {
    ...palette.text,
    primary: '#ffffff', // Change primary text color to white
    secondary: '#a0a0a0', // Change secondary text color to a light gray
    disabled: '#808080', // Change disabled text color to a slightly darker gray
    hint: '#c0c0c0', // Change hint text color to a lighter gray
  },
};