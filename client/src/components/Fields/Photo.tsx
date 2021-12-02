import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { memo, VoidFunctionComponent } from "react";
import { FieldProps } from "../../types";

const useStyles = makeStyles({
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.09)",
  },
});

const Photo: VoidFunctionComponent<FieldProps> = (props) => {
  const classes = useStyles();

  return (
    <Box>
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
    </Box>
  );
}

export default memo(Photo)
