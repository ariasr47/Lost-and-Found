import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import { memo, VoidFunctionComponent } from "react";

const Datetime: VoidFunctionComponent<FieldProps> = (props) => {
  const { field, form, ...other } = props;

  return <TextField id={"datetime"} type="datetime-local" {...field} {...other} />;
};

export default memo(Datetime);
