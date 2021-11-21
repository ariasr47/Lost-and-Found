import { memo, VoidFunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import { FieldProps } from "../../types";

const useStyles = makeStyles({
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.09)",
  },
});

export const Photo: VoidFunctionComponent<FieldProps> = memo((props) => {
  const classes = useStyles();

  return (
    <>
      <Grid item>
        <Typography variant={"body1"} component="span">
          Attach a photo (optional)
        </Typography>
      </Grid>
      <Grid item>
        <input
          id="photo"
          name="photo"
          hidden
          type="file"
          accept="image/*"
          onChange={props.onChange}
        />
        <label htmlFor="photo">
          <Button
            variant="contained"
            className={classes.button}
            component="span"
          >
            <Typography variant="body2">Choose File</Typography>
          </Button>
        </label>
      </Grid>
    </>
  );
});
