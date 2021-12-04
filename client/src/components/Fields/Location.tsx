import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import { memo, VoidFunctionComponent } from "react";

const Location: VoidFunctionComponent<FieldProps> = (props) => {
  const { field, form, ...other } = props;

  return <TextField id={"location"} disabled variant="filled" {...field} {...other} />;
};

export default memo(Location);
