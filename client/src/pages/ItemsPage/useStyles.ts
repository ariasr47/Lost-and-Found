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
  img: {
    width: "75ch",
    height: "400px",
    position: "relative",
    paddingTop: "56.25%",
  },
}));

export default useStyles;
