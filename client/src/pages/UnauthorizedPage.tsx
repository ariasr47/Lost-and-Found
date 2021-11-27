import { Box } from "@material-ui/core";
import { FunctionComponent } from "react";

const UnauthorizedPage: FunctionComponent = () => (
  <Box style={{ width: "100%", height: "100%", display: "flex" }}>
    <img
      alt=""
      src={`/error/error401.svg`}
      style={{
        height: "auto",
        maxWidth: "100%",
        width: 400,
        margin: "auto",
      }}
    />
  </Box>
);

export default UnauthorizedPage;
