import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";
import Category from "./Category";

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
        button: (props: { type: string }) => ({
            backgroundColor: props.type === "finder" ? "#daab27" : "#142a50",
        }),
    })
);

const categories = [
    {
        value: "None",
    },
    {
        value: "Cell Phone",
    },
    {
        value: "Laptop",
    },
    {
        value: "Headphones",
    },
    {
        value: "Keys",
    },
    {
        value: "Wallet/Purse",
    },
    {
        value: "Backpack",
    },
];

export default function Form1({ type }: any) {
    const classes = useStyles({ type });
    const [inputs, setInputs] = React.useState([
        { id: "title", value: "" },
        { id: "category", value: "None" },
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
            sessionStorage.setItem(input["id"], input["value"]);
        });
    };

    return (
        <Grid container item direction="column" className={classes.root}>
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
                <Category
                    id={inputs[1].id}
                    value={inputs[1].value}
                    onChange={handleChange}
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
                    className={classes.button}
                >
                    <Typography variant={"body2"} className={classes.text}>
                        Next
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    );
}
