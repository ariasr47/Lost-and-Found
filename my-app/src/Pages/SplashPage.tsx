import Grid from "@material-ui/core/Grid";
import { RouteComponentProps } from "@reach/router";
import ShieldsEntrance from "../images/Shields-entrance_Credit-Hector-Villicana_1924x1282-960x600-c-center.jpg";
import DavisLogo from "../images/UC_Davis_Logo.png";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: "100vh",
        backgroundColor: "#365c85",
    },
    img1: {
        background: `url(${ShieldsEntrance})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    img2: {
        marginTop: "4px",
        marginRight: "8px",
        width: "500px",
        height: "183px",
        background: `url(${DavisLogo})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    },
    logo: {
        marginLeft: "auto",
    },
    button: {
        backgroundColor: "#fff",
        marginTop: 24,
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
            <Grid item xs className={classes.img1} />
            <Grid container item xs>
                <Box m={"auto"}>
                    <div className={classes.img2} />
                    <Grid container justify={"center"}>
                        <Button
                            startIcon={<FcGoogle size="36px" />}
                            variant={"contained"}
                            className={classes.button}
                        >
                            Login with Google
                        </Button>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SplashPage;
