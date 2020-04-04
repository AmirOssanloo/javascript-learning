import { createMuiTheme, createBreakpoints, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 680,
      md: 1060,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    text: {
      primary: '#efede7',
      secondary: '#efede7',
    }
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: {
      fontSize: '7.2rem',
      fontWeight: 700
    },
    h2: {
      fontSize: '4.2rem',
      fontWeight: 600
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 600
    },
    subtitle1: {
      fontSize: '2rem',
      fontWeight: 400
    }
  },
  overrides: {
    Box: {
      borderRadius: 'none',
      boxShadow: 'none'
    }
  }
});

// main: {
//   bg: '#1f1f1f',
//   text: '#484642'
// },
// brand: {
//   primary: '#ae914b;',
//   success: '#24a36e',
//   warning: '#eb8831',
//   error: '#cd4331'
// }


export default theme;
