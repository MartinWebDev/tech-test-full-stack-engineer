import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";

import reducers from "./Reducers";

const store = (state, history, middlewares) => createStore(
    reducers(history),
    state,
    compose(applyMiddleware(routerMiddleware(history), ...middlewares))
);

export default store;