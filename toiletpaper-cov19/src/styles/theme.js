import { createMuiTheme, createBreakpoints, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#efede7',
      secondary: '#efede7',
    }
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: {
      fontSize: '8rem',
      fontWeight: 800
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


export default responsiveFontSizes(theme);
