import { Link } from "@reach/router";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontFamily: "Montserrat",
  },
  button: (props: { type: string }) => ({
    backgroundColor: props.type === "finder" ? "#daab27" : "#142a50",
  }),
}));

const Next = ({ type, onClick }: any) => {
  const classes = useStyles({ type });
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="../2"
        onClick={onClick}
        className={classes.button}
      >
        <Typography variant={"body2"} className={classes.text}>
          Next
        </Typography>
      </Button>
    </>
  );
};

export default Next;