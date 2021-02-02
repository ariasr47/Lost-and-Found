import { RouteComponentProps, useParams } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import { Theme, Typography } from "@material-ui/core";
import SearchBar from "../Components/SearchBar";
import Grid from "@material-ui/core/Grid";
import Form1 from "../Components/Form1";
import Form2 from "../Components/Form2";
import Page from "../Components/Page";

const useStyles = makeStyles((theme: Theme) => ({
    text: {
        fontFamily: '"Montserrat"',
        fontWeight: "bolder",
        color: "#142a50",
    },
    form: {
        padding: theme.spacing(3),
        backgroundColor: "#e5e5e5",
    },
    bottom: {
        marginTop: theme.spacing(2),
    },
    top: {
        marginBottom: theme.spacing(2),
    },
}));

const InputPage = (props: RouteComponentProps) => {
    const classes = useStyles();
    const params = useParams();

    let form;
    switch (params.index) {
        case "1":
            form = <Form1 type={params.type} index={params.index} />;
            break;
        case "2":
            form = <Form2 type={params.type} index={params.index} />;
            break;
        case "search":
            form = <Form2 type={params.type} index={params.index} />;
            break;
    }

    const search = (
        <SearchBar
            type={params.type}
            label={`Or search for existing ${
                params.type === "finder" ? "requests" : "items"
            }`}
        />
    );

    const title =
        params.index !== "search" ? (
            <Typography variant="h4" className={classes.text}>
                {`Input the ${
                    params.type === "finder" ? "found" : "lost"
                } item`}
            </Typography>
        ) : null;

    return (
        <Page bgColor={params.type === "finder" ? "#feebb1" : "#b3c1d1"}>
            <Grid item container justify="center">
                <Grid item>
                    <Grid container direction="column">
                        <Grid item className={classes.top}>
                            {params.index !== "search" ? title : search}
                        </Grid>
                        <Grid item className={classes.form}>
                            {form}
                        </Grid>
                        <Grid item className={classes.bottom}>
                            {params.index !== "search" ? search : null}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Page>
    );
};

export default InputPage;
