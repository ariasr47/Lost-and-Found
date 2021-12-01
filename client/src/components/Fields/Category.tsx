import { Box, TextField, Typography } from "@material-ui/core";
import { memo, VoidFunctionComponent } from "react";
import { categories } from "../../constants";
import { FieldProps } from "../../types";

export const Category: VoidFunctionComponent<FieldProps> = memo((props) => {
  return (
    <Box>
      <Typography variant="body1">Category</Typography>
      <TextField
        id="category"
        select
        variant="filled"
        SelectProps={{
          native: true,
        }}
        {...props}
      >
        {categories.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </TextField>
    </Box>
  );
});
