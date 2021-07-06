import { combineReducers } from "redux";

import auth from "./auth/index";
import base from "./base/index";
import client from "./client/index";

const rootReducer = combineReducers({
  auth,
  base,
  client
});

export default rootReducer;