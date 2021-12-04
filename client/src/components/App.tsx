import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { VFC } from "react";
import Routes from "./Routes";
import theme from "../theme";

const App: VFC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routes />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
