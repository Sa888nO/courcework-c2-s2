import { createStore, applyMiddleware, combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { lessonReducer } from "./lessonReducer";
import { subscribeReducer } from "./subscribeReduces";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  user: userReducer,
  lessons: lessonReducer,
  subscribes: subscribeReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
