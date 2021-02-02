import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import SearchBar from "./SearchBar";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) => ({
    text: {
        fontFamily: '"Montserrat"',
        fontWeight: "bolder",
        color: "#142a50",
    },
}));

const FormTemplate = ({ index, type, children }: any) => {
    const classes = useStyles();

    const search = (
        <SearchBar
            label={`Or search for existing ${
                type === "finder" ? "requests" : "items"
            }`}
        />
    );

    const title =
        index !== "search" ? (
            <Typography variant="h4" className={classes.text}>
                {`Input the ${type === "finder" ? "found" : "lost"} item`}
            </Typography>
        ) : null;

    return (
        <Box m="auto" display="flex" flexDirection="column" flexGrow="1">
            <Box marginBottom="16px">{index !== "search" ? title : search}</Box>
            <Box>{children}</Box>
            {index !== "search" ? <Box marginTop="16px">{search}</Box> : null}
        </Box>
    );
};

export default FormTemplate;
