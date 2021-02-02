import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Link, RouteComponentProps, useParams } from "@reach/router";
import { Typography } from "@material-ui/core";
import Page from "../Components/Page";

const useStyles = makeStyles((theme: Theme) => ({
    text: {
        color: "#142a50",
        fontFamily: "Montserrat",
        fontWeight: "bold",
    },
    finder: {
        color: "#fff",
        backgroundColor: "#daab27",
    },
    seeker: {
        color: "#fff",
        backgroundColor: "#142a50",
    },
    buttonText: {
        fontFamily: "Montserrat",
    },
}));

const HomePage = (props: RouteComponentProps) => {
    const classes = useStyles();
    const params = useParams();
    console.log(params);
    return (
        <Page bgColor={"#b3c1d1"}>
            <Grid container item xs alignItems={"center"}>
                <Grid
                    item
                    container
                    xs
                    justify="center"
                    direction="row"
                    spacing={4}
                >
                    <Grid item>
                        <Grid container direction="column" spacing={3}>
                            <Grid item>
                                <Typography
                                    variant={"h5"}
                                    className={classes.text}
                                >
                                    Did you find something?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant={"contained"}
                                    className={classes.finder}
                                    component={Link}
                                    to="../finder/1"
                                >
                                    <Typography
                                        variant={"body2"}
                                        className={classes.buttonText}
                                    >
                                        I'm a finder
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" spacing={3}>
                            <Grid item>
                                <Typography
                                    variant={"h5"}
                                    className={classes.text}
                                >
                                    Or are you looking for something?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant={"contained"}
                                    className={classes.seeker}
                                    component={Link}
                                    to="../seeker/1"
                                >
                                    <Typography
                                        variant={"body2"}
                                        className={classes.buttonText}
                                    >
                                        I'm a seeker
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Page>
    );
};

export default HomePage;
