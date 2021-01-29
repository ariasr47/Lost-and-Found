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
        newInputs[0] = { ...inputs[0], value };
        setInputs(newInputs);
    };

    const handleMarker = (value: string) => {
        const newInputs = [...inputs];
        newInputs[1] = { ...inputs[1], value };
        setInputs(newInputs);
    };

    const handleClick = () => {
        inputs.forEach((input) => {
            sessionStorage.setItem(input["id"], input["value"]);
        });
        axios
            .post("/api/row", sessionStorage)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <Grid
            container
            item
            direction="column"
            className={classes.root}
            spacing={3}
        >
            <Grid container item direction="column" spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="body1" className={classes.text}>
                        Date & Time
                    </Typography>
                    <TextField
                        id={inputs[0]["id"]}
                        type="datetime-local"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" className={classes.text}>
                        Location
                    </Typography>
                    <TextField
                        id={inputs[1]["id"]}
                        multiline
                        disabled
                        value={inputs[1]["value"]}
                        variant="filled"
                    />
                </Grid>
                <Grid item>
                    <GoogleMap handleMarker={handleMarker} />
                </Grid>
            </Grid>
            <Grid container item justify="flex-end">
                <Button
                    variant="contained"
                    color="primary"
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
