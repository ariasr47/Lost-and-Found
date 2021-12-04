import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import { memo, VoidFunctionComponent } from "react";

const Description: VoidFunctionComponent<FieldProps> = (props) => {
  const { field, form, ...other } = props;

  return (
    <TextField
      id="description"
      title="description"
      variant="filled"
      multiline
      minRows={6}
      maxRows={6}
      placeholder="Write a short description."
      error={form.touched.description && Boolean(form.errors.description)}
      helperText={form.touched.description && form.errors.description}
      {...field}
      {...other}
    />
  );
};

export default memo(Description);
