import { combineReducers } from "redux";
import { reducer as images } from "./images";

const reducers = {
  images,
};

export const appReducer = combineReducers(reducers);
