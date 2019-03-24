import React from "react";

import { JOB_STATUS } from "../../../Consts/JobConsts";

const JobListStatusFilter = ({ onToggle, currentStatus }) => {
    return (
        <div id="job-status-toggle" className="page-section border">
            <div
                className={`job-status-toggle-option ${currentStatus === JOB_STATUS.NEW ? "active" : ""}`}
                onClick={() => onToggle(JOB_STATUS.NEW)}
            >
                Invited
            </div>

            <div
                className={`job-status-toggle-option ${currentStatus === JOB_STATUS.ACCEPTED ? "active" : ""}`}
                onClick={() => onToggle(JOB_STATUS.ACCEPTED)}
            >
                Accepted
            </div>
        </div>
    );
};

export default JobListStatusFilter;