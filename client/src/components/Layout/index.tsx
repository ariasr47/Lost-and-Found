import { Box } from "@material-ui/core";
import { FC } from "react";
import useStyles from "./useStyles";

const Layout: FC = (props) => {
  const classes = useStyles();

  return <Box className={classes.root}>{props.children}</Box>;
};

export default Layout;
