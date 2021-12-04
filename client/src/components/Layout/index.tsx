import { Box } from "@material-ui/core";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../types";
import useStyles from "./useStyles";

const Layout: FC = (props) => {
  const backgroundColor = useSelector((state: RootState) => state.backgroundColor);
  const classes = useStyles({ backgroundColor });

  return <Box className={classes.root}>{props.children}</Box>;
};

export default Layout;
