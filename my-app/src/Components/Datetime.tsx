import { makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontFamily: "Montserrat",
  },
}));

const Datetime = ({ id, onChange }: any) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="body1" className={classes.text}>
        Date & Time
      </Typography>
      <TextField id={id} type="datetime-local" onChange={onChange} />
    </>
  );
};

export default Datetime;
