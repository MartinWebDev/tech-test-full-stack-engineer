import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import PropTypes from 'prop-types';

import "./App.scss";

import App from "./App";

import Home from "./Views/Home";
import Contact from "./Views/About";
// const Home = React.lazy(() => import("./Views/Home"));
const Jobs = React.lazy(() => import("./Views/Jobs"));
// const Contact = React.lazy(() => import("./Views/Contact"));

// Lazy load for router
function ReactRouterLazyWrapper(Element) {
    return (props) => (
        <Suspense fallback={<p>Loading...</p>}>
            <Element {...props} />
        </Suspense>
    );
}

const AppRouter = ({ store, history }) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App>
                    <TransitionGroup>
                        <CSSTransition
                            key={history.location.pathname.split('/')[1]}
                            timeout={500}
                            // classNames={getPathDepth(location) - this.state.prevDepth > 0 ? 'pageSliderLeft' : 'pageSliderRight'}
                            // classNames={getInfo(history)}
                            mountOnEnter={true}
                            unmountOnExit={true}
                        >
                            <Switch>
                                <Route path="/" exact component={ReactRouterLazyWrapper(Home)} />
                                <Route path="/jobs" component={ReactRouterLazyWrapper(Jobs)} />
                                <Route path="/contact" component={ReactRouterLazyWrapper(Contact)} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </App>
            </ConnectedRouter>
        </Provider>
    );
};

AppRouter.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default AppRouter;
