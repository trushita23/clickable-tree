import { createMuiTheme } from '@material-ui/core/styles';
import { blue,grey } from '@material-ui/core/colors';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: 12,
  },
  palette: {
    primary: {
      main: '#1e88e5',
    },
    secondary: {
      main: '#64b5f6',
    },
  },
  overrides: {
    MuiTabs: {
      root: {
        color: blue[900],
      },
    },
    MuiTab: {
      root: {
        '&$selected': {
          color: grey[700],
        },

        textTransform: 'none',
        fontWeight:600
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiListItem: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  },
});

export default theme;
