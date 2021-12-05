import axios from "axios";
import { lazy, Suspense, useLayoutEffect, VFC } from "react";
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from "react-router-dom";
import SplashPage from "../pages/SplashPage";
import AuthenticatedLayout from "./AuthenticatedLayout";
import Layout from "./Layout";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<SplashPage />}>
      <Component {...props} />
    </Suspense>
  );

const ErrorPage = Loadable(lazy(() => import("../pages/ErrorPage")));
const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
const FormPage = Loadable(lazy(() => import("../pages/FormPage")));
const ItemsPage = Loadable(lazy(() => import("../pages/ItemsPage")));
const UnauthorizedPage = Loadable(lazy(() => import("../pages/ErrorPage/UnauthorizedPage")));

const AuthenticatedApp: VFC<RouteComponentProps> = (props) => {
  const { history, location, match } = props;

  useLayoutEffect(() => {
    axios
      .get("/auth/user")
      .then((res) => res.data)
      .then((user) => {
        if (!user) {
          history.replace("/");
        }
      });
  }, [history, location]);

  return (
    <AuthenticatedLayout>
      <Switch>
        <Route exact path={`${match.path}/Home`} component={HomePage} />
        <Route exact path={`${match.path}/:role(seeker|finder)/form/:page(1|2|search)`} component={FormPage} />
        <Route exact path={`${match.path}/:role(seeker|finder)/items`} component={ItemsPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </AuthenticatedLayout>
  );
};

const Routes: VFC = (props) => {
  return (
    <Router>
      {/* This should be a splash page */}
      <Layout>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/users" component={AuthenticatedApp} />
          <Route path="/401" component={UnauthorizedPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
