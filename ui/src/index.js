// React
import React from "react";
import ReactDOM from "react-dom";

// Redux
import { createBrowserHistory } from "history";
import { createLogger } from "redux-logger";
import storeCreator from "./store";

// Redux Middlwares
import promiseMiddleware from 'redux-promise-middleware'

// My Middlwares
import rejectedPromiseMiddleware from "./Middlewares/rejectedPromiseMiddleware";
import JobsMiddleware from "./Middlewares/JobsMiddleware";

// Components/Start
import AppRouter from "./AppRouter";

// Initial actions
import { init, goToJobsPage } from "./Actions/SettingsActions";

// Style imports
import "./index.scss";

// Setup middleware
const logger = createLogger({});
const history = createBrowserHistory();

let middlewares = [
    promiseMiddleware,
    rejectedPromiseMiddleware,
    JobsMiddleware,
    /*Always include logger last*/
    logger
];
//if (process.env.REACT_APP_ENV === "development") middlewares.push(logger); // In real app, would use something like this so as not to log in prod

const store = storeCreator({}, history, middlewares);
store.dispatch(init());

store.dispatch(goToJobsPage());

ReactDOM.render(<AppRouter store={store} history={history} />, document.getElementById("page"));
