import { FunctionComponent, memo, useCallback } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { FieldInputProps, FormikErrors, FormikTouched } from "formik";

import GoogleMap from "../GoogleMap";
import { Datetime, Location } from "./";
import { Fields } from "../../types";

interface FormProps {
  role: "finder" | "seeker";
  query?: string;
  getFieldProps?: (name: string) => FieldInputProps<any>;
  errors: FormikErrors<Fields>;
  touched: FormikTouched<Fields>;
  setFieldValue?: (name: string, value: any) => void;
}

const Form2: FunctionComponent<FormProps> = ({
  children,
  role,
  setFieldValue,
  getFieldProps,
  ...props
}) => {
  const handleMarkerDrag = useCallback(
    (latlng) => setFieldValue("location", latlng),
    [setFieldValue]
  );

  return (
    <Grid container item direction="column" spacing={2}>
      <Grid key="date-time" container item direction="column">
        <Datetime {...getFieldProps("datetime")} />
      </Grid>
      <Grid key="location" container item direction="column">
        <Location {...getFieldProps("location")} />
      </Grid>
      <Grid key="google-map" container item direction="column">
        <GoogleMap onChange={handleMarkerDrag} />
      </Grid>
      <Grid key="button" container item justifyContent="flex-end">
        <Button
          variant="contained"
          type="submit"
          color={role === "finder" ? "secondary" : "primary"}
        >
          <Typography variant="button">Submit</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default memo(Form2);
