import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GoogleMap from "./GoogleMap";
import { Link } from "@reach/router";
import axios from "axios";
import Category from "./Category";
import Search from "./Datetime";
import Location from "./Location";
import Submit from "./Submit";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "50ch",
    },
  },
}));

const Form2 = ({ index, type }: any) => {
  const classes = useStyles({ type });
  const [inputs, setInputs] = React.useState([
    { id: "datetime", value: "" },
    { id: "location", value: "" },
    { id: "category", value: "None" },
  ]);

  const handleChange = ({ target: { id, value } }: any) => {
    const newInputs = [...inputs];
    const index = inputs.findIndex((input) => input.id === id);
    newInputs[index] = { ...inputs[index], value };
    setInputs(newInputs);
  };

  const handleMarker = (value: string) => {
    const newInputs = [...inputs];
    newInputs[1] = { ...inputs[1], value };
    setInputs(newInputs);
  };

  const handleClick = async () => {
    inputs.forEach((input) => {
      sessionStorage.setItem(input["id"], input["value"]);
    });
    const res = await axios.post("/api/row", sessionStorage);
    console.log(`${res.status} ${res.statusText}`);
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
          <Search id={inputs[0].id} onChange={handleChange} />
        </Grid>
        {index === "search" ? (
          <Grid item xs={12}>
            <Category
              id={inputs[1].id}
              value={inputs[1].value}
              onChange={handleChange}
            />
          </Grid>
        ) : null}
        <Grid item xs={12}>
          <Location id={inputs[2].id} value={inputs[2].value} />
        </Grid>
        <Grid item>
          <GoogleMap handleMarker={handleMarker} />
        </Grid>
      </Grid>
      <Grid container item justify="flex-end">
        <Submit index={index} type={type} onClick={handleClick} />
      </Grid>
    </Grid>
  );
};

export default Form2;
