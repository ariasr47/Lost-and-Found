import { Box, Button, Grid } from "@material-ui/core";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FC, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import useStyles from "./useStyles";

const LandingPage: FC<RouteComponentProps> = (props) => {
  const classes = useStyles();

  const handleLogin = useCallback(() => {
    window.location.replace(process.env.REACT_APP_OAUTH_SCREEN);
  }, []);

  return (
    <Grid container direction={"row"} className={classes.container}>
      <Grid item xs className={classes.ucd_library} />
      <Grid container item xs direction={"column"}>
        <Box m="auto" display="flex" flexDirection="column">
          <div className={classes.ucd_logo} />
          <Button
            startIcon={<FcGoogle size="36px" />}
            variant={"contained"}
            className={classes.button}
            onClick={handleLogin}
          >
            Login with Google
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
