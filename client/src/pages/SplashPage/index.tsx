import { Box, CircularProgress } from "@material-ui/core";
import { VFC } from "react";
import useStyles from "./useStyles";

const SplashPage: VFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <CircularProgress color="primary" size="4rem" />
    </Box>
  );
};

export default SplashPage;
