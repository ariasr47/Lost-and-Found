import Grid from "@material-ui/core/Grid";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Page from "../Components/Page";

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        fontFamily: '"Montserrat"',
        fontWeight: "bolder",
        color: "#142a50",
        marginBottom: "16px",
    },
    subtitle: {},
}));

const ListingsPage = (props: any) => {
    const classes = useStyles();
    const date = "May 10th - May 17th";
    const category = "Phones";
    const location = "Quad";
    return (
        <Page bgColor={"#e5e5e5"}>
            <Grid container item xs justify="center">
                <Grid item>
                    <Grid container item direction="column">
                        <Grid item>
                            <Typography
                                variant="h4"
                                gutterBottom
                                className={classes.header}
                            >
                                Showing results for
                            </Typography>
                        </Grid>
                        <Grid container item spacing={3}>
                            <Grid item>
                                <Typography
                                    variant="subtitle1"
                                    className={classes.subtitle}
                                >
                                    {date}, {category}, {location}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained">
                                    <Typography variant="body2">
                                        Edit Search
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

export default ListingsPage;
