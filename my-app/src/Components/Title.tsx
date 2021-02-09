import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontFamily: "Montserrat",
  },
}));

const Title = ({ id, value, onChange }: any) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="body1" className={classes.text}>
        Title
      </Typography>
      <TextField
        id={id}
        value={value}
        required
        onChange={onChange}
        variant="filled"
      />
    </>
  );
};

export default Title;
