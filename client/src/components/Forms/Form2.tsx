import { Button, Grid, Typography } from "@material-ui/core";
import { Field, Form, FormikProps } from "formik";
import { FunctionComponent, memo, useCallback, useEffect } from "react";
import { Fields } from "../../types";
import { Datetime, Location } from "../Fields";
import GoogleMap from "../GoogleMap";

type Form2Props = FormikProps<Fields> & { role: string };

const Form2: FunctionComponent<Form2Props> = (props) => {
  const { setFieldValue, values, role } = props;

  const handleMarkerDrag = useCallback(
    (e: google.maps.MapMouseEvent) => {
      setFieldValue("location", e.latLng.toString());
    },
    [setFieldValue]
  );

  useEffect(() => {
    sessionStorage.setItem("formValues", JSON.stringify(values));
  }, [values]);

  return (
    <Form>
      <Grid container item direction="column" spacing={2}>
        <Grid key="date-time" container item direction="column">
          <Typography variant="body1">Date & Time</Typography>
          <Field name="datetime" component={Datetime} />
        </Grid>
        <Grid key="location" container item direction="column">
          <Typography variant="body1">Location</Typography>
          <Field name="location" component={Location} />
        </Grid>
        <Grid key="google-map" container item direction="column">
          <GoogleMap onDrag={handleMarkerDrag} />
        </Grid>
        <Grid key="button" container item justifyContent="flex-end">
          <Button variant="contained" type="submit" color={role === "finder" ? "secondary" : "primary"}>
            <Typography variant="button">Submit</Typography>
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default memo(Form2);
