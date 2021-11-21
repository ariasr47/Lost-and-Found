import { FC, lazy } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const FormPage = lazy(() => import("./pages/FormPage"));
const ItemsPage = lazy(() => import("./pages/ItemsPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const AuthenticatedApp: FC<RouteComponentProps> = (props) => {
  return (
    <Switch>
      <Route exact path={`${props.match.path}/Home`} component={HomePage} />
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
  );
};

export default AuthenticatedApp;
