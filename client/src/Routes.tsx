import { lazy, Suspense, VFC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import Layout from "./components/Layout";
import SplashPage from "./pages/SplashPage";

const UnauthorizedPage = lazy(() => import("./pages/UnauthorizedPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const FormPage = lazy(() => import("./pages/FormPage"));
const ItemsPage = lazy(() => import("./pages/ItemsPage"));

const Routes: VFC = () => {
  return (
    <Router>
      {/* This should be a splash page */}
      <Layout>
        <Suspense fallback={<SplashPage />}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/users">
              {(props) => (
                <AuthenticatedLayout>
                  <Switch>
                    <Route
                      exact
                      path={`${props.match.path}/Home`}
                      component={HomePage}
                    />
                    <Route
                      exact
                      path={`${props.match.path}/:role(seeker|finder)/form/:page(1|2|search)`}
                      component={FormPage}
                    />
                    <Route
                      exact
                      path={`${props.match.path}/:role(seeker|finder)/items`}
                      component={ItemsPage}
                    />
                    <Route path="*" component={ErrorPage} />
                  </Switch>
                </AuthenticatedLayout>
              )}
            </Route>
            <Route path="/401" component={UnauthorizedPage} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default Routes;
