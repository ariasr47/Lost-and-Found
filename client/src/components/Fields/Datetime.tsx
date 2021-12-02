import { Box, TextField, Typography } from "@material-ui/core";
import { memo, VoidFunctionComponent } from "react";
import { FieldProps } from "../../types";

const Datetime: VoidFunctionComponent<FieldProps> = (props) => {
  return (
    <Box>
      <Typography variant="body1">Date & Time</Typography>
      <TextField id={"datetime"} type="datetime-local" {...props} />
    </Box>
  );
};

export default memo(Datetime);
