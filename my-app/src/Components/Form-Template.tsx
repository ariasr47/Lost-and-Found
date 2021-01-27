import Grid from "@material-ui/core/Grid";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import DavisLogo from "../images/UC_Davis_Logo.png";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    root: (props: { type: string }) => ({
        minHeight: "100vh",
        backgroundColor: props.type === "finder" ? "#feebb1" : "#b3c1d1",
    }),
    img2: {
        marginTop: "4px",
        marginRight: "12px",
        width: "300px",
        height: "183px",
        background: `url(${DavisLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
    },
    header: {
        fontFamily: '"Montserrat"',
        fontWeight: "bolder",
        color: "#142a50",
        marginBottom: "16px",
    },
}));

const FormTemplate = ({ title, options, type, children }: any) => {
    const classes = useStyles({ type });
    return (
        <Grid container className={classes.root} direction="column">
            <Grid container item xs={12} justify={"flex-end"}>
                <Grid item className={classes.img2} />
            </Grid>
            <Grid container item xs justify="center">
                <Grid item>
                    {title ? (
                        <Grid item>
                            <Typography
                                variant={"h4"}
                                className={classes.header}
                            >
                                {title}
                            </Typography>
                        </Grid>
                    ) : null}
                    {options ? <Grid item>{options}</Grid> : null}
                    {children}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default FormTemplate;
