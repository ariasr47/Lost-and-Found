import { VoidFunctionComponent, memo } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { FieldProps } from "../../types";

const categories = [
  "Other",
  "Cell Phone",
  "Laptop",
  "Headphones",
  "Keys",
  "Wallet/Purse",
  "Backpack",
];

export const Category: VoidFunctionComponent<FieldProps> = memo((props) => {
  return (
    <>
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
    </>
  );
});
