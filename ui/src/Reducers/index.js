import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import JobsReducer from "./JobsReducer";
import SettingsReducer from "./SettingsReducer";

export default (history) => combineReducers({
    router: connectRouter(history),
    JobsReducer,
    SettingsReducer
});
