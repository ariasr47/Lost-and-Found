import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#142a50",
      contrastText: "#fff",
    },
    secondary: {
      main: "#daab27",
      contrastText: "#fff",
    },
    background: {
      paper: "#e5e5e5",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h5: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
  },
});

export default theme;
