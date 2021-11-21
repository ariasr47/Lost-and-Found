import { ChangeEvent, FunctionComponent, memo, useCallback } from "react";

import { Button, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { FieldInputProps, FormikErrors, FormikTouched } from "formik";

import { Category, Description, Photo, Title } from "./";
import { Fields } from "../../types";

interface FormProps {
  role: "finder" | "seeker";
  query?: string;
  getFieldProps?: (name: string) => FieldInputProps<any>;
  errors: FormikErrors<Fields>;
  touched: FormikTouched<Fields>;
  setFieldValue?: (name: string, value: any) => void;
}

const Form1: FunctionComponent<FormProps> = ({
  children,
  role,
  touched,
  errors,
  getFieldProps,
  setFieldValue,
  ...props
}) => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push(`/users/${role}/form/2`);
  }, [history, role]);

  const handlePhotoChange = useCallback(
    (e: ChangeEvent<any>) => {
      setFieldValue("photo", e.target.files[0]);
    },
    [setFieldValue]
  );

  return (
    <Grid container item direction="column" spacing={2}>
      <Grid key="title" container item direction="column">
        <Title
          {...getFieldProps("title")}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
        />
      </Grid>
      <Grid key="category" container item direction="column">
        <Category
          {...getFieldProps("category")}
          error={touched.category && Boolean(errors.category)}
          helperText={touched.category && errors.category}
        />
      </Grid>
      <Grid key="description" container item direction="column">
        <Description
          {...getFieldProps("description")}
          error={touched.description && Boolean(errors.description)}
          helperText={touched.description && errors.description}
        />
      </Grid>
      <Grid key="photo" container item direction="column">
        <Photo onChange={handlePhotoChange} />
      </Grid>
      <Grid key="button" container item justifyContent="flex-end">
        <Button
          variant="contained"
          color={role === "finder" ? "secondary" : "primary"}
          onClick={handleClick}
        >
          <Typography variant="button">Next</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default memo(Form1);
