import { makeStyles, Theme } from "@material-ui/core/styles";

export type LayoutStyleProps = {
  backgroundColor: string;
};

const useStyles = makeStyles<Theme, LayoutStyleProps>((theme) => ({
  root: {
    minHeight: "100vh",
    flexDirection: "column",
    backgroundColor: (props) => props.backgroundColor,
  },
}));

export default useStyles;
