import { Button, Grid, Typography } from "@material-ui/core";
import { FieldInputProps, FormikErrors, FormikTouched } from "formik";
import { FunctionComponent, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Fields } from "../../types";
import GoogleMap from "../GoogleMap";
import { Category, Datetime, Location } from ".";

interface FormProps {
  role: "finder" | "seeker";
  query?: string;
  getFieldProps?: (name: string) => FieldInputProps<any>;
  errors: FormikErrors<Fields>;
  touched: FormikTouched<Fields>;
  setFieldValue?: (name: string, value: any) => void;
}

const Form3: FunctionComponent<FormProps> = ({
  children,
  role,
  query,
  getFieldProps,
  ...props
}) => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push(`/users/${role}/items?search=${query}`);
  }, [history, query, role]);

  return (
    <Grid container item direction="column" spacing={2}>
      <Grid key="date-time" container item direction="column">
        <Datetime {...getFieldProps("datetime")} />
      </Grid>
      <Grid key="category" container item direction="column">
        <Category {...getFieldProps("category")} />
      </Grid>
      <Grid key="location" container item direction="column">
        <Location {...getFieldProps("location")} />
      </Grid>
      <Grid key="google-map" container item direction="column">
        <GoogleMap />
      </Grid>
      <Grid key="button" container item justifyContent="flex-end">
        <Button
          variant="contained"
          color={role === "finder" ? "secondary" : "primary"}
          onClick={handleClick}
        >
          <Typography variant="button">Search</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default memo(Form3);
