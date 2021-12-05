import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    padding: "4px",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    padding: "4px",
  },
  accordion: {
    width: "600px",
  },
  imgContainer: {
    width: "75ch",
    height: "400px",
    position: "relative",
    paddingTop: "56.25%",
  },
  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    right: "0",
    left: "0",
    bottom: "0",
    objectFit: "cover",
  },
}));

export default useStyles;
