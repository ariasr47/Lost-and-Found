import { VoidFunctionComponent, memo } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { FieldProps } from "../../types";

export const Description: VoidFunctionComponent<FieldProps> = memo((props) => {
  return (
    <>
      <Typography variant="body1">Description</Typography>
      <TextField
        id="description"
        title="description"
        variant="filled"
        multiline
        minRows={6}
        maxRows={6}
        placeholder="Write a short description."
        {...props}
      />
    </>
  );
});
