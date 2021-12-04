import { Box } from "@material-ui/core";
import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";

const ErrorPage: FC<RouteComponentProps> = (props) => (
  <Box sx={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}>
    <h1>Error: Not Found</h1>
  </Box>
);

export default ErrorPage;
