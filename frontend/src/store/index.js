import { createStore } from "redux";
import { itemsReducer } from "./items/itemsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  items: itemsReducer,
});
export const store = createStore(rootReducer);
