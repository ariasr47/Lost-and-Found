import { configureStore } from "@reduxjs/toolkit";
import { initialState } from "../constants";
import reducer from "../reducers";

const hydrateStore = () => {
  const savedState = sessionStorage.getItem("savedState");
  return savedState ? JSON.parse(savedState) : initialState;
};

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: hydrateStore(),
});

store.subscribe(() => {
  const state = store.getState();
  sessionStorage.setItem("savedState", JSON.stringify(state));
});

export default store;
