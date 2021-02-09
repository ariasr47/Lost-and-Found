import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontFamily: "Montserrat",
  },
  upload: {
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    paddingBottom: "3px",
    paddingTop: "3px",
  },
}));

const Photo = ({ id, value}: any) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant={"body1"} className={classes.text}>
        Attach a photo (optional)
      </Typography>
      <Button variant="text" className={classes.upload}>
        <Typography variant={"body2"} className={classes.text}>
          Choose File
        </Typography>
      </Button>
    </>
  );
};

export default Photo;
