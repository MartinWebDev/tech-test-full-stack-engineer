import React from "react";

const App = ({ children }) => {
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

export default App;
