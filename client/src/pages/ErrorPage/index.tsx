import { Box } from "@material-ui/core";
import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";

const ErrorPage: FC<RouteComponentProps> = (props) => (
  <Box>
    <h1>Error: Not Found</h1>
    <p>Sorry, nothing here</p>
  </Box>
);

export default ErrorPage;
