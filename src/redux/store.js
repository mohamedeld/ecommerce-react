import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const initial_state= {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initial_state,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;