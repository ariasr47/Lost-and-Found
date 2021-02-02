import Grid from "@material-ui/core/Grid";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
    text: {
        fontFamily: "Montserrat",
    },
}));

const Category = ({ id, value, onChange }: any) => {
    const classes = useStyles();

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
    return (
        <Grid item>
            <Typography variant="body1" className={classes.text}>
                Category
            </Typography>
            <TextField
                id={id}
                select
                value={value}
                required
                onChange={onChange}
                variant="filled"
                SelectProps={{
                    native: true,
                }}
            >
                {categories.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.value}
                    </option>
                ))}
            </TextField>
        </Grid>
    );
};

export default Category;
