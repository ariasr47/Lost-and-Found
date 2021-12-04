import { Button, Grid, Typography } from "@material-ui/core";
import { FC, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { reset, setBackgroundColor } from "../../actions";

const HomePage: FC<RouteComponentProps> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(reset());
    dispatch(setBackgroundColor("#b3c1d1"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container item xs alignItems="center">
      <Grid item container xs justifyContent="center" direction="row" spacing={4}>
        <Grid item>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Typography variant="h5" color="primary">
                Did you find something?
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" onClick={() => history.push("/users/finder/form/1")}>
                <Typography variant="body2">I'm a finder</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Typography variant="h5" color="primary">
                Or are you looking for something?
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={() => history.push("/users/seeker/form/1")}>
                <Typography variant="body2">I'm a seeker</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
