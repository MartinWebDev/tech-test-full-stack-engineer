import React from "react";
import { Route, Switch } from "react-router-dom";

import JobList from "./Components/Jobs/JobList";
import JobDetails from "./Components/Jobs/JobDetails";

const Jobs = (props) => {
    return (
        <div id="jobs-page">
            <Switch location={props.location}>
                <Route path="/jobs" exact component={JobList} />
                <Route path="/jobs/:id" exact component={JobDetails} />
            </Switch>
        </div>
    );
};

export default Jobs;
