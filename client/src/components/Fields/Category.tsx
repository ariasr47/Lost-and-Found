import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import { memo, VoidFunctionComponent } from "react";
import { categories } from "../../constants";

const Category: VoidFunctionComponent<FieldProps> = (props) => {
  const { field, form, ...other } = props;

  return (
    <TextField
      id="category"
      title="category"
      variant="filled"
      select
      SelectProps={{
        native: true,
      }}
      error={form.touched.category && Boolean(form.errors.category)}
      helperText={form.touched.category && form.errors.category}
      {...field}
      {...other}
    >
      {categories.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </TextField>
  );
};

export default memo(Category);
