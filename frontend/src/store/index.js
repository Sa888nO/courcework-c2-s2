import { createStore, applyMiddleware, combineReducers } from "redux";
import { itemsReducer } from "./items/itemsReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  items: itemsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
