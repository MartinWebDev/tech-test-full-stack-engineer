import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

const App = ({ children, push }) => {
    // Force user to jobs page for the sake of this task
    push("/jobs");

    return (
        <React.Fragment>
            <div id="page-wrapper">
                <div id="page-body">
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
}

const mapDispatchToProps = (dispatch) => ({
    push: (path) => dispatch(push(path))
});

export default connect(null, mapDispatchToProps)(App);
