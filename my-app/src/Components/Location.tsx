import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontFamily: "Montserrat",
  },
}));

const Location = ({ id, value }: any) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="body1" className={classes.text}>
        Location
      </Typography>
      <TextField id={id} multiline disabled value={value} variant="filled" />
    </>
  );
};

export default Location;