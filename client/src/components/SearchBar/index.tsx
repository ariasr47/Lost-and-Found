import { Box, IconButton, InputBase, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { FunctionComponent, memo } from "react";
import { useHistory } from "react-router-dom";
import { SearchBarProps } from "../../types";
import useStyles from "./useStyles";

const SearchBar: FunctionComponent<SearchBarProps> = (props) => {
  const { query, onChange: handleChange } = props;
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box>
      <Paper className={classes.root}>
        <InputBase
          id="search"
          value={query}
          className={classes.input}
          placeholder="Search for item"
          onMouseDown={() => history.push(`search`)}
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
