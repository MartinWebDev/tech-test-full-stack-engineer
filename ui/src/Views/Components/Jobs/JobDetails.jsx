import React from "react";
import { connect } from "react-redux";
import { getJobDetails } from "../../../Selectors/JobSelectors";

const JobDetails = (props) => {
    return (
        <p>JOB DETAILS FULL VIEW</p>
    );
};

const mapStateToProps = (state, { match: { params: { id } } }) => ({
    job: getJobDetails(state.JobsReducer.jobs, id)
});

export default connect(mapStateToProps)(JobDetails);
