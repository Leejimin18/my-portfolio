import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7A00A0',
      dark: '#780996',
    },
    secondary: {
      main: '#FF5B28',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F9F0E1',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
    },
    divider: '#E0E0E0',
    custom: {
      accent: '#014924',
      bgCream: '#F9F0E1',
      bgDark: '#2E3446',
      bgBrown: '#332215',
      bgFooter: '#2C0139',
      textInverse: '#FFFFFF',
      borderInverse: '#FFFFFF',
      btnOrange: '#FF5B28',
      btnPurple: '#7A00A0',
      btnGreen: '#014924',
      warmYellow: '#FFD54F',
      warmGreen: '#AED581',
      cardBg: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
});

export default theme;
