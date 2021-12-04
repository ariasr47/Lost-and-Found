import { createReducer } from "@reduxjs/toolkit";
import { reset, setBackgroundColor, setQuery } from "../actions";
import { initialState } from "../constants";

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setQuery, (state, action) => {
      state.query = action.payload;
    })
    .addCase(setBackgroundColor, (state, action) => {
      state.backgroundColor = action.payload;
    })
    .addCase(reset, (state, action) => {
      state.query = initialState.query;
    })
    .addDefaultCase((state) => state);
});

export default reducer;
