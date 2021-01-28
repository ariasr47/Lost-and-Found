import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GoogleMap from "./GoogleMap";
import { Link } from "@reach/router";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& .MuiTextField-root": {
                width: "50ch",
            },
        },
        button: {
            margin: theme.spacing(1),
        },
        text: {
            fontFamily: "Montserrat",
        },
    })
);

export default function MultilineTextFields(props: any) {
    const classes = useStyles();
    const [inputs, setInputs] = React.useState([
        { id: "datetime", value: "" },
        { id: "location", value: "" },
    ]);

    const handleChange = ({ target: { id, value } }: any) => {
        const newInputs = [...inputs];
        const index = inputs.findIndex((input) => input.id === id);
        newInputs[index] = { ...inputs[index], value };
        setInputs(newInputs);
    };

    const handleClick = () => {
        inputs.forEach((input) => {
            localStorage.setItem(input["id"], input["value"]);
        });
        axios
            .post("/api/row", localStorage)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <Grid
            container
            item
            direction="column"
            spacing={2}
            className={classes.root}
        >
            <Grid container item direction="row">
                <Grid item xs={12}>
                    <Typography variant="body1" className={classes.text}>
                        Date & Time
                    </Typography>
                    <TextField
                        id={inputs[0]["id"]}
                        type="datetime-local"
                        defaultValue="2021-01-01T10:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container item direction="row">
                <Grid item xs={12}>
                    <Typography variant="body1" className={classes.text}>
                        Location
                    </Typography>
                    <TextField
                        id={inputs[1]["id"]}
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
                    <Typography variant="body2" className={classes.text}>
                        Submit
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    );
}
