import { lazy, Suspense, VFC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedLayout from "./AuthenticatedLayout";
import Layout from "./Layout";
import SplashPage from "../pages/SplashPage";

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
const UnauthorizedPage = Loadable(lazy(() => import("../pages/UnauthorizedPage")));

const Routes: VFC = () => {
  return (
    <Router>
      {/* This should be a splash page */}
      <Layout>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/users">
            {(props) => (
              <AuthenticatedLayout>
                <Switch>
                  <Route exact path={`${props.match.path}/Home`} component={HomePage} />
                  <Route
                    exact
                    path={`${props.match.path}/:role(seeker|finder)/form/:page(1|2|search)`}
                    component={FormPage}
                  />
                  <Route exact path={`${props.match.path}/:role(seeker|finder)/items`} component={ItemsPage} />
                  <Route path="*" component={ErrorPage} />
                </Switch>
              </AuthenticatedLayout>
            )}
          </Route>
          <Route path="/401" component={UnauthorizedPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
