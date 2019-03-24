import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { fetchJobsActionCreator } from "../../../Actions/JobsActions";
import { fetchJobs } from "../../../Middlewares/JobsMiddleware";

import { JOB_STATUS } from "../../../Consts/JobConsts";

import Job from "./Job";
import JobListStatusFilter from "./JobListStatusFilter";

const JobList = (props) => {
    const [filterStatus, setFilterStatus] = useState(JOB_STATUS.NEW);

    // Was trying to find a way to prevent re-rendering on filter change so prevent reloading images. 
    // Not a bit impact on performance, but would be nice to have. 
    // This didn't quite work and I suspect because of redux, so will experiment with in future
    const filteredJobs = useMemo(() => props.jobs.filter((job) => job.status.toUpperCase() === filterStatus), [props.jobs, filterStatus]);

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
                    filteredJobs.map((job) =>
                        <CSSTransition key={job.id} classNames="fade-in-TODO-FIX" timeout={0}>
                            <Job id={job.id} key={job.id} />
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
