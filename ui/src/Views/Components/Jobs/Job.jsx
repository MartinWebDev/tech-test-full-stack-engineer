// Packages
import React from "react";
import { connect } from "react-redux";
import moment from "moment";

// Selectors
import { getJobDetails } from "../../../Selectors/JobSelectors";

// Components
import IconTextPair from "../../../Partials/IconTextPair";
import ProfileThumb from "../Profiles/ProfileThumb";
import Button from "../../../Partials/Button";
import Price from "../../../Partials/Price";

const Job = ({ job, dateFormat }) => {
    return (
        <div className="jobs-page-list-item">
            <div className="jobs-page-list-item-inner page-section border">
                <div className="jobs-page-list-item-header">
                    <ProfileThumb />
                    <div className="jobs-page-list-item-header-title">{job.contact_name}</div>
                    <div className="jobs-page-list-item-header-date">Posted: {moment(job.created_date).format(dateFormat)}</div>
                </div>

                <div className="jobs-page-list-item-info">
                    <IconTextPair icon={`/img/icons8-place-marker-50.png`} text={`${job.suburb_name} ${job.postcode}`} />
                    <IconTextPair icon={`/img/job-category/${job.icon_filename}`} text={job.category_name} />
                    <IconTextPair text={`Job ID: ${job.id}`} />
                </div>

                <div className="jobs-page-list-item-description">{job.description}</div>

                <div className="jobs-page-list-item-links">
                    <Button onClick={console.log} primary>Accept</Button>
                    <Button onClick={console.log}>Decline</Button>
                    <Price amount={job.price} rate={1} symbol="$" /> Lead Invitation
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
