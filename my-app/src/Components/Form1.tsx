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
        upload: {
            backgroundColor: "rgba(0, 0, 0, 0.09)",
            paddingBottom: "3px",
            paddingTop: "3px",
        },
        text: {
            fontFamily: "Montserrat",
        },
    })
);

export default function MultilineTextFields(props: any) {
    const classes = useStyles();
    const [inputs, setInputs] = React.useState([
        { id: "title", value: "" },
        { id: "category", value: "" },
        { id: "description", value: "" },
        { id: "photo", value: "" },
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
    };

    return (
        <Grid
            container
            item
            direction="column"
            spacing={2}
            className={classes.root}
        >
            <Grid item>
                <Typography variant="body1" className={classes.text}>
                    Title
                </Typography>
                <TextField
                    id={inputs[0].id}
                    value={inputs[0].value}
                    required
                    onChange={handleChange}
                    variant="filled"
                />
            </Grid>
            <Grid item>
                <Typography variant="body1" className={classes.text}>
                    Category
                </Typography>
                <TextField
                    id={inputs[1].id}
                    value={inputs[1].value}
                    required
                    onChange={handleChange}
                    variant="filled"
                />
            </Grid>

            <Grid item>
                <Typography variant="body1" className={classes.text}>
                    Description
                </Typography>
                <TextField
                    id={inputs[2].id}
                    value={inputs[2].value}
                    multiline
                    rows={6}
                    rowsMax={6}
                    onChange={handleChange}
                    variant="filled"
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant={"body1"} className={classes.text}>
                    Attach a photo (optional)
                </Typography>
                <Button variant="text" className={classes.upload}>
                    <Typography variant={"body2"} className={classes.text}>
                        Choose File
                    </Typography>
                </Button>
            </Grid>
            <Grid container item justify="flex-end">
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="../2"
                    onClick={handleClick}
                >
                    <Typography variant={"body2"} className={classes.text}>
                        Next
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    );
}
