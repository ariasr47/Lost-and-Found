import { Box, TextField, Typography } from "@material-ui/core";
import { memo, VoidFunctionComponent } from "react";
import { FieldProps } from "../../types";

const Description: VoidFunctionComponent<FieldProps> = (props) => {
  return (
    <Box>
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
    </Box>
  );
};

export default memo(Description);
