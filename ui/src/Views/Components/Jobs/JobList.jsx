import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { fetchJobsActionCreator } from "../../../Actions/JobsActions";
import { fetchJobs } from "../../../Middlewares/JobsMiddleware";

import { JOB_STATUS } from "../../../Consts/JobConsts";

import Job from "./Job";
import JobListStatusFilter from "./JobListStatusFilter";

const JobList = (props) => {
    const [filterStatus, setFilterStatus] = useState(JOB_STATUS.IN_PROGRESS);

    // TODO: Definitely a better way to call this in functional component w/hooks, but it's ok for now.
    useEffect(() => {
        props.fetchJobs();
    }, []);

    const handleToggleStatus = (newStatus) => {
        setFilterStatus(newStatus);
    };

    return (
        <React.Fragment>
            <JobListStatusFilter onToggle={handleToggleStatus} currentStatus={filterStatus} />

            <TransitionGroup id="jobs-page-list">
                {
                    props.jobs.filter((job) =>
                        job.status.toUpperCase() === filterStatus
                    ).map((job) =>
                        <CSSTransition key={job.jobId} classNames="fade-in-TODO-FIX" timeout={0}>
                            <Job id={job.jobId} key={job.jobId} />
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    jobs: state.JobsReducer.jobs
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchJobs: () => dispatch(fetchJobsActionCreator(fetchJobs()))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
