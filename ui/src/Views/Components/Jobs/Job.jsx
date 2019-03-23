// Packages
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

// Selectors
import { getJobDetails } from "../../../Selectors/JobSelectors";

// Components
import ProfileThumb from "../Profiles/ProfileThumb";
import ContextMenuContainer from "../../../Partials/ContextMenu/ContextMenuContainer";
import ContextMenuItem from "../../../Partials/ContextMenu/ContextMenuItem";

const Job = ({ job, dateFormat }) => {
    const hiredCount = job.connectedBusinesses && job.connectedBusinesses.filter((business) => business.isHired).length;

    return (
        <div className="jobs-page-list-item">
            <div className="jobs-page-list-item-inner page-section border">
                <div className="jobs-page-list-item-header">
                    <ContextMenuContainer>
                        <ContextMenuItem text="Some text" onClick={console.log} />
                    </ContextMenuContainer>

                    <div className="jobs-page-list-item-header-contextmenu">
                        <img src="/imgs/icons/icons8-menu-vertical-24.png" alt="" />
                    </div>

                    <div className="jobs-page-list-item-header-title">{job.category}</div>
                    <div className="jobs-page-list-item-header-date">Posted: {moment(job.postedDate, "YYYY-MM-DD").format(dateFormat)}</div>
                </div>

                <div className="jobs-page-list-item-status">{job.status}</div>

                <div className="jobs-page-list-item-hired">
                    <div className="jobs-page-list-item-hired-status">
                        {
                            hiredCount > 0 ?
                                `You have hired ${hiredCount} business${hiredCount > 1 ? 'es' : ''}` :
                                `Conncting you with businesses`
                        }
                    </div>

                    <div className="jobs-page-list-item-hired-people">
                        {
                            job.connectedBusinesses &&
                            job.connectedBusinesses.map((business) =>
                                <ProfileThumb key={business.businessId} profile={business} />
                            )
                        }
                    </div>
                </div>

                <div className="jobs-page-list-item-links">
                    <Link to={`/jobs/${job.jobId}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, { id }) => ({
    dateFormat: state.SettingsReducer.site.dateDisplayFormat,
    job: getJobDetails(state.JobsReducer.jobs, id)
});

export default connect(mapStateToProps)(Job);
