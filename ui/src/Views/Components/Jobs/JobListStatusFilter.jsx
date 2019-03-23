import React from "react";

import { JOB_STATUS } from "../../../Consts/JobConsts";

const JobListStatusFilter = ({ onToggle, currentStatus }) => {
    return (
        <div id="job-status-toggle" className="page-section border">
            <div
                className={`job-status-toggle-option ${currentStatus === JOB_STATUS.IN_PROGRESS ? "active" : ""}`}
                onClick={() => onToggle(JOB_STATUS.IN_PROGRESS)}
            >
                Open Jobs
            </div>

            <div
                className={`job-status-toggle-option ${currentStatus === JOB_STATUS.CLOSED ? "active" : ""}`}
                onClick={() => onToggle(JOB_STATUS.CLOSED)}
            >
                Closed Jobs
            </div>
        </div>
    );
};

export default JobListStatusFilter;