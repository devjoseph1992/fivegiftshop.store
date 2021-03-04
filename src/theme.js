import { createMuiTheme } from '@material-ui/core/styles';
import { green, lightGreen, red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: lightGreen.A400,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'smokewhite',
    },
  },
});

export default theme;