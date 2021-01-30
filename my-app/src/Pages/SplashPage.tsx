import Grid from "@material-ui/core/Grid";
import { Link, RouteComponentProps } from "@reach/router";
import ShieldsEntrance from "../images/Shields-entrance_Credit-Hector-Villicana_1924x1282-960x600-c-center.jpg";
import DavisLogo from "../images/UC_Davis_Logo.png";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: "100vh",
        backgroundColor: "#365c85",
    },
    ucd_library: {
        background: `url(${ShieldsEntrance})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    ucd_logo: {
        marginTop: "4px",
        marginRight: "8px",
        width: "500px",
        height: "183px",
        background: `url(${DavisLogo})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    },
    button: {
        backgroundColor: "#fff",
        marginTop: 24,
    },
    buttonText: {
        fontFamily: "Montserrat",
    },
}));

const SplashPage = (props: RouteComponentProps) => {
    const matches = useMediaQuery("(min-width:1025px)");
    const classes = useStyles();

    return (
        <Grid
            container
            direction={matches ? "row" : "column"}
            className={classes.root}
        >
            <Grid item xs className={classes.ucd_library} />
            <Grid container item xs>
                <Box m={"auto"}>
                    <div className={classes.ucd_logo} />
                    <Grid container justify={"center"}>
                        <Button
                            startIcon={<FcGoogle size="36px" />}
                            variant={"contained"}
                            className={classes.button}
                            component={Link}
                            to="auth/google"
                        >
                            <Typography
                                variant={"body1"}
                                className={classes.buttonText}
                            >
                                Login with Google
                            </Typography>
                        </Button>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SplashPage;
