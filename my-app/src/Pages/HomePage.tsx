import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Link, RouteComponentProps, useParams } from "@reach/router";
import DavisLogo from "../images/UC_Davis_Logo.png";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: "100vh",
        backgroundColor: "#b3c1d1",
    },
    img2: {
        marginTop: "4px",
        marginRight: "12px",
        width: "300px",
        height: "183px",
        background: `url(${DavisLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
    },
    text: {
        color: "#142a50",
        fontFamily: "Montserrat",
        fontWeight: "bold",
    },
    button1: {
        color: "#fff",
        backgroundColor: "#daab27",
    },
    button2: {
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
        <Grid container direction={"column"} className={classes.root}>
            <Grid container item xs={12} justify={"flex-end"}>
                <Grid item className={classes.img2} />
            </Grid>
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
                                    className={classes.button1}
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
                                    className={classes.button2}
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
        </Grid>
    );
};

export default HomePage;
