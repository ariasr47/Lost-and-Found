import { Box, TextField, Typography } from "@material-ui/core";
import { memo, VoidFunctionComponent } from "react";
import { FieldProps } from "../../types";

export const Datetime: VoidFunctionComponent<FieldProps> = memo((props) => {
  return (
    <Box>
      <Typography variant="body1">Date & Time</Typography>
      <TextField id={"datetime"} type="datetime-local" {...props} />
    </Box>
  );
});
