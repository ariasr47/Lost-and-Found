import { Box, Button, Typography } from "@material-ui/core";
import { FieldProps } from "formik";
import { memo, VoidFunctionComponent } from "react";

const Photo: VoidFunctionComponent<FieldProps> = (props) => {
  const { field, form, ...other } = props;
  const { name } = field;
  return (
    <Box>
      <input id="photo" name={name} title="photo" hidden type="file" accept="image/*" {...other} />
      <label htmlFor="photo">
        <Button variant="contained" style={{ backgroundColor: "rgba(0, 0, 0, 0.09)" }} component="span">
          <Typography variant="body2">Choose File</Typography>
        </Button>
      </label>
    </Box>
  );
};

export default memo(Photo);
