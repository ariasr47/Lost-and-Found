import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: theme.spacing(2),
    },
}));


export default useStyles
