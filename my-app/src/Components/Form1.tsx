import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& .MuiTextField-root": {
                width: "75ch",
            },
        },
        button: {},
        div: {
            backgroundColor: "#e5e5e5",
            padding: theme.spacing(3),
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
                    <Grid item>
                        <Typography variant="body1">Title</Typography>
                    </Grid>
                    <TextField
                        id="filled-multiline-flexible"
                        multiline
                        rowsMax={4}
                        value={value}
                        onChange={handleChange}
                        variant="filled"
                    />
                    <Grid item>
                        <Typography variant="body1">Category</Typography>
                    </Grid>
                    <TextField
                        id="filled-textarea"
                        multiline
                        variant="filled"
                    />
                    <Grid item>
                        <Typography variant="body1">Description</Typography>
                    </Grid>
                    <TextField
                        id="filled-multiline-static"
                        multiline
                        rows={6}
                        variant="filled"
                    />
                    <Grid item xs={12}>
                        <Typography variant={"body1"}>
                            Attach a photo (optional)
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Choose File
                        </Button>
                    </Grid>
                    <Grid container item justify="flex-end">
                        <Link to="../2" style={{ textDecoration: "none" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Next
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
