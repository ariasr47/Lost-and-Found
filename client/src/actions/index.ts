import { createAction } from "@reduxjs/toolkit";

export const setQuery = createAction<string>("SET_QUERY");
export const setBackgroundColor = createAction<string>("SET_BACKGROUND_COLOR");
