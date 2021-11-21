import { memo, VoidFunctionComponent } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { FieldProps } from "../../types";

export const Title: VoidFunctionComponent<FieldProps> = memo((props) => {
  return (
    <>
      <Typography variant="body1">Title</Typography>
      <TextField
        id="title"
        title="title"
        variant="filled"
        placeholder="What did you find?"
        {...props}
      />
    </>
  );
});
