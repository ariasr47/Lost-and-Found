import { memo, VoidFunctionComponent } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { FieldProps } from "../../types";

export const Location: VoidFunctionComponent<FieldProps> = memo((props) => {
  return (
    <>
      <Typography variant="body1">Location</Typography>
      <TextField
        id={"location"}
        disabled
        variant="filled"
        value={props.value}
        error={props.error}
        helperText={props.helperText}
      />
    </>
  );
});
