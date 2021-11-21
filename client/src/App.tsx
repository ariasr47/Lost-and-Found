import { lazy, Suspense, VFC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";

const UnauthorizedPage = lazy(() => import("./pages/UnauthorizedPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const SplashPage = lazy(() => import("./pages/SplashPage"));
const AuthenticatedApp = lazy(() => import("./AuthenticatedApp"));

const App: VFC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <Route path="/users" component={AuthenticatedApp} />
          <Route path="/401" component={UnauthorizedPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Suspense>
    </Router>
  </ThemeProvider>
);

export default App;
