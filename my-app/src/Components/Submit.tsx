import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "@reach/router";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  text: {
    fontFamily: "Montserrat",
  },
  button: (props: { type: string }) => ({
    backgroundColor: props.type === "finder" ? "#daab27" : "#142a50",
  }),
}));

const Submit = ({ index, onClick, type }: any) => {
  const classes = useStyles({type});
  return (
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/user/Listings"
      onClick={onClick}
      className={classes.button}
    >
      <Typography variant="body2" className={classes.text}>
        {index === "search" ? "Search" : "Submit"}
      </Typography>
    </Button>
  );
};

export default Submit;
