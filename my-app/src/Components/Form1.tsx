import { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Category from "./Category";
import Title from "./Title";
import Description from "./Description";
import Photo from "./Photo";
import Next from "./Next";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "75ch",
    },
  },
}));

const Form1 = ({ type }: any) => {
  const classes = useStyles({ type });
  const [inputs, setInputs] = useState([
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
        <Title
          id={inputs[0].id}
          value={inputs[0].value}
          onChange={handleChange}
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
        <Description
          id={inputs[2].id}
          value={inputs[2].value}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <Photo
          id={inputs[3].id}
          value={inputs[3].value}
          onChange={handleChange}
        />
      </Grid>
      <Grid container item justify="flex-end">
        <Next onClick={handleClick} />
      </Grid>
    </Grid>
  );
}

export default Form1;