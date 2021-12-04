import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import { memo, VoidFunctionComponent } from "react";

const Title: VoidFunctionComponent<FieldProps> = (props) => {
  const { field, form, ...other } = props;

  return (
    <TextField
      id="title"
      title="title"
      variant="filled"
      error={form.touched.title && Boolean(form.errors.title)}
      helperText={form.touched.title && form.errors.title}
      {...field}
      {...other}
    />
  );
};

export default memo(Title);
