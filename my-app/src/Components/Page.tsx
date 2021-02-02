import Grid from "@material-ui/core/Grid";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import DavisLogo from "../images/UC_Davis_Logo.png";
import { Link } from "@reach/router";

const useStyles = makeStyles((theme: Theme) => ({
    root: (props: { bgColor: string }) => ({
        minHeight: "100vh",
        backgroundColor: props.bgColor,
    }),
    logo: {
        marginTop: "4px",
        marginRight: "12px",
        width: "300px",
        height: "150px",
        background: `url(${DavisLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
    },
}));

const Page = ({ bgColor, children }: any) => {
    const classes = useStyles({ bgColor });

    return (
        <Grid container className={classes.root} direction="column">
            <Grid container item xs={12} justify={"flex-end"}>
                <Grid
                    item
                    component={Link}
                    to={"/user/Home"}
                    className={classes.logo}
                />
            </Grid>
            {children}
        </Grid>
    );
};

export default Page;
