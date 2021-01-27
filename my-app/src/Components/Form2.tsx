import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GoogleMap from "./GoogleMap";
import { Link } from "@reach/router";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#e5e5e5",
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
                width: "50ch",
            },
        },
        button: {
            margin: theme.spacing(1),
        },
    })
);

export default function MultilineTextFields(props: any) {
    const classes = useStyles();
    const [inputs, setInputs] = React.useState([
        { id: "date-time", value: "" },
        { id: "location", value: "" },
    ]);

    const handleChange = ({ target: { id, value } }: any) => {
        const newInputs = [...inputs];
        const index = inputs.findIndex((input) => input.id === id);
        newInputs[index] = { ...inputs[index], value };
        setInputs(newInputs);
    };

    const handleClick = () => {};

    return (
        <div className={classes.root}>
            <Grid container item direction="column">
                <Grid container item direction="row">
                    <Grid item xs={12}>
                        <Typography variant="body1">Date & Time</Typography>
                        <TextField
                            id="date-time"
                            multiline
                            rowsMax={4}
                            value={inputs[0]["value"]}
                            onChange={handleChange}
                            variant="filled"
                        />
                        <TextField
                            id="filled-textarea"
                            multiline
                            variant="filled"
                        />
                    </Grid>
                </Grid>
                <Grid container item direction="row">
                    <Grid item xs={12}>
                        <Typography variant="body1">Location</Typography>
                        <TextField
                            id="location"
                            multiline
                            rowsMax={4}
                            value={inputs[1]["value"]}
                            onChange={handleChange}
                            variant="filled"
                        />
                    </Grid>
                </Grid>
                <Grid container item direction="column">
                    <Grid item>
                        <GoogleMap />
                    </Grid>
                </Grid>
                <Grid container item justify="flex-end">
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        component={Link}
                        to="/"
                        onClick={handleClick}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
