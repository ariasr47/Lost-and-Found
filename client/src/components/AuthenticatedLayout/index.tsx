import { FC } from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";

import useStyles from "./useStyles";

const Logo = styled(Link)((props) => ({
  marginTop: props.theme.spacing(0.5),
  marginRight: props.theme.spacing(1.5),
  width: "300px",
  height: "150px",
  backgroundImage: `url(/UC_Davis_Logo.png)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}));

const AuthenticatedLayout: FC<{ backgroundColor: string }> = (props) => {
  const classes = useStyles({ backgroundColor: props["backgroundColor"] });

  return (
    <Grid container className={classes.root}>
      <Grid container item xs={12} justifyContent={"flex-end"}>
        <Grid item component={Logo} to="/users/Home" />
      </Grid>
      {props.children}
    </Grid>
  );
};

export default AuthenticatedLayout;