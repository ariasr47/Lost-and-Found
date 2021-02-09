import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontFamily: "Montserrat",
  },
}));

const Description = ({ id, value, onChange }: any) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="body1" className={classes.text}>
        Description
      </Typography>
      <TextField
        id={id}
        value={value}
        multiline
        rows={6}
        rowsMax={6}
        onChange={onChange}
        variant="filled"
      />
    </>
  );
};

export default Description;
