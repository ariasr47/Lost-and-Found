import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
            padding: 10,
        },
        text: {
            fontFamily: '"Montserrat"',
            fontWeight: "bolder",
            color: "#142a50",
        },
    })
);

export default function SearchBar({ label }: any) {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h4" className={classes.text}>
                {label}
            </Typography>
            <Paper className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search for item"
                    inputProps={{ "aria-label": "search google maps" }}
                    onMouseDown={() => navigate("../search")}
                />
                <IconButton
                    type="submit"
                    className={classes.iconButton}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </>
    );
}
