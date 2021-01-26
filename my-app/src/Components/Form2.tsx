import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GoogleMap from "./GoogleMap";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
                width: "75ch",
            },
        },
        button: {
            margin: theme.spacing(1),
        },
        div: {
            backgroundColor: "#e5e5e5",
        },
    })
);

export default function MultilineTextFields(props: any) {
    const classes = useStyles();
    const [value, setValue] = React.useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div className={classes.div}>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid container item direction="column">
                    <Grid container item direction="row">
                        <Grid item xs={12}>
                            <Typography variant="body1">Date & Time</Typography>
                        </Grid>
                        <TextField
                            id="filled-multiline-flexible"
                            multiline
                            rowsMax={4}
                            value={value}
                            onChange={handleChange}
                            variant="filled"
                        />
                        <TextField
                            id="filled-textarea"
                            multiline
                            variant="filled"
                        />
                    </Grid>
                    <Grid container item direction="row">
                        <Grid item xs={12}>
                            <Typography variant="body1">Location</Typography>
                        </Grid>
                        <TextField
                            id="filled-multiline-flexible"
                            multiline
                            rowsMax={4}
                            value={value}
                            onChange={handleChange}
                            variant="filled"
                        />
                    </Grid>
                    <Grid container item direction="column">
                        {/*<GoogleMap />*/}
                    </Grid>

                    <Grid container item justify="flex-end">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
