import { Button, Grid, Typography } from "@material-ui/core";
import { Field, Form, FormikProps } from "formik";
import { FunctionComponent, memo, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Fields } from "../../types";
import { Category, Datetime, Location } from "../Fields";
import GoogleMap from "../GoogleMap";

type Form3Props = FormikProps<Fields> & { role: string; query?: string };

const Form3: FunctionComponent<Form3Props> = (props) => {
  const { setFieldValue, values, role, query } = props;

  const history = useHistory();

  const handleMarkerDrag = useCallback(
    (e: google.maps.MapMouseEvent) => {
      setFieldValue("location", e.latLng.toString());
    },
    [setFieldValue]
  );

  const handleClick = useCallback(() => {
    history.push(`/users/${role}/items?query=${query}`);
  }, [history, role, query]);

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
        <Grid key="category" container item direction="column">
          <Typography variant="body1">Category</Typography>
          <Field name="category" component={Category} />
        </Grid>
        <Grid key="location" container item direction="column">
          <Typography variant="body1">Location</Typography>
          <Field name="location" component={Location} />
        </Grid>
        <Grid key="google-map" container item direction="column">
          <GoogleMap onDrag={handleMarkerDrag} />
        </Grid>
        <Grid key="button" container item justifyContent="flex-end">
          <Button variant="contained" color={role === "finder" ? "secondary" : "primary"} onClick={handleClick}>
            <Typography variant="button">Search</Typography>
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default memo(Form3);
