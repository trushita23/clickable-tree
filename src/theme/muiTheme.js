import { createMuiTheme } from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  tab: {
    panel: {
      borderStyle: "solid",
      border: 1
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 10
  },
  palette: {
    primary: {
      main: "#1e88e5"
    },
    secondary: {
      main: "#64b5f6"
    }
  },
  overrides: {
    MuiTabs: {
      root: {
        color: blue[900],
        minHeight: 24,
        height: 24
      },
      scrollButtonsDesktop: {
        borderBottom: "1px solid"
      }
    },
    MuiTab: {
      root: {
        "&$selected": {
          color: grey[700],
          borderTop: 1,
          borderRight: 1,
          borderLeft: 1,
          borderStyle: "solid",
          borderBottom: "none",
          marginRIght: 2
        },
        borderBottom: "1px solid",
        maxWidth: 150,
        minHeight: 24,
        height: 24,
        textTransform: "none",
        fontWeight: 600,
        padding: 3
      }
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0
      }
    },
    MuiListItem: {
      root: {
        paddingTop: 0,
        paddingBottom: 0
      }
    },
    PrivateSwitchBase: {
      root: {
        padding: 2
      }
    },
    MuiIconButton: {
      root: {
        padding: 10
      }
    },
    textField: {
      [`& fieldset`]: {
        borderRadius: 0
      }
    }
  }
});

export default theme;
