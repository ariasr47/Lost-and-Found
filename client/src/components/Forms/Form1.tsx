import { Button, Grid, Typography } from "@material-ui/core";
import { ChangeEvent, FunctionComponent, memo, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Category, Description, Photo, Title } from "../Fields";
import { Field, Form, FormikProps } from "formik";
import { Fields } from "../../types";

type Form1Props = FormikProps<Fields> & { role: string; query?: string };

const Form1: FunctionComponent<Form1Props> = (props) => {
  const { setFieldValue, errors, values, role } = props;

  const history = useHistory();

  const handleClickNext = useCallback(() => {
    history.push(`/users/${role}/form/2`);
  }, [history, role]);

  const handlePhotoChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFieldValue("photo", e.target.files[0]);
    },
    [setFieldValue]
  );

  useEffect(() => {
    sessionStorage.setItem("formValues", JSON.stringify(values));
  }, [values]);

  return (
    <Form>
      <Grid container item direction="column" spacing={2}>
        <Grid key="title" container item direction="column">
          <Typography variant="body1">Title</Typography>
          <Field name="title" component={Title} placeholder="What did you find?" />
        </Grid>
        <Grid key="category" container item direction="column">
          <Typography variant="body1">Category</Typography>
          <Field name="category" component={Category} />
        </Grid>
        <Grid key="description" container item direction="column">
          <Typography variant="body1">Description</Typography>
          <Field name="description" component={Description} />
        </Grid>
        <Grid key="photo" container item direction="column">
          <Typography variant={"body1"} component="span">
            Attach a photo (optional)
          </Typography>
          <Field name="photo" component={Photo} onChange={handlePhotoChange} />
        </Grid>
        <Grid key="button" container item justifyContent="flex-end">
          <Button
            variant="contained"
            disabled={
              Boolean(errors.title) || Boolean(errors.description) || values.title === "" || values.description === ""
            }
            color={role === "finder" ? "secondary" : "primary"}
            onClick={handleClickNext}
          >
            <Typography variant="button">Next</Typography>
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default memo(Form1);
