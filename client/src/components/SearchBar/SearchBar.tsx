import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { ChangeEvent, FunctionComponent, memo } from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./useStyles";

type SearchBarProps = {
  role: "finder" | "seeker";
  query: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: FunctionComponent<SearchBarProps> = (props) => {
  const { role, query, onChange: handleChange } = props;
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box>
      <Typography variant="h4" color="primary">
        {`Or search for existing ${role === "finder" ? "requests" : "items"}`}
      </Typography>
      <Paper className={classes.root}>
        <InputBase
          id="search"
          value={query}
          className={classes.input}
          placeholder="Search for item"
          onMouseDown={() => history.push(`/users/${role}/form/search`)}
          onChange={handleChange}
        />
        <IconButton title="search" type="submit" className={classes.iconButton}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default memo(SearchBar);
