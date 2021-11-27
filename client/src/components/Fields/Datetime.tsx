import { VoidFunctionComponent, memo } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { FieldProps } from "../../types";

export const Datetime: VoidFunctionComponent<FieldProps> = memo((props) => {
  return (
    <>
      <Typography variant="body1">Date & Time</Typography>
      <TextField id={"datetime"} type="datetime-local" {...props} />
    </>
  );
});
