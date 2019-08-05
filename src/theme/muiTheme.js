import { createMuiTheme } from '@material-ui/core/styles';
import { blue,grey } from '@material-ui/core/colors';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: 12
  },
  palette: {
    primary: {
      main: '#009be5',
    },
  },
  overrides: {
    MuiTabs: {
      root: {
        color: blue[300],
      },
      indicator: {
        backgroundColor: blue[300]
      }
    },
    MuiTab: {
      root: {
        '&$selected': {
          color: grey[700],
        },
      },
    },
  },
});

export default theme;
