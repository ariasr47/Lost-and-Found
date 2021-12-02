import { Box, TextField, Typography } from "@material-ui/core";
import { memo, VoidFunctionComponent } from "react";
import { FieldProps } from "../../types";

const Location: VoidFunctionComponent<FieldProps> = (props) => {
  return (
    <Box>
      <Typography variant="body1">Location</Typography>
      <TextField
        id={"location"}
        disabled
        variant="filled"
        value={props.value}
        error={props.error}
        helperText={props.helperText}
      />
    </Box>
  );
};

export default memo(Location);
