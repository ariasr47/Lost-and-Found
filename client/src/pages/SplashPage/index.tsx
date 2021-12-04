import { Box } from "@material-ui/core";
import { VFC } from "react";
import useStyles from "./useStyles";

const SplashPage: VFC = () => {
  const classes = useStyles();

  return <Box className={classes.container}></Box>;
};

export default SplashPage;
