import { Box, TextField, Typography } from "@material-ui/core";
import { memo, VoidFunctionComponent } from "react";
import { FieldProps } from "../../types";

export const Title: VoidFunctionComponent<FieldProps> = memo((props) => {
  return (
    <Box>
      <Typography variant="body1">Title</Typography>
      <TextField
        id="title"
        title="title"
        variant="filled"
        placeholder="What did you find?"
        {...props}
      />
    </Box>
  );
});
