// Packages
import React, { memo } from "react";
import { connect } from "react-redux";
import moment from "moment";

// Action promises
import { acceptJob } from "../../../Middlewares/JobsMiddleware";
import { declineJob } from "../../../Middlewares/JobsMiddleware";

// Selectors
import { getJobDetails } from "../../../Selectors/JobSelectors";

// Components
import { IconTextPair, IconComponentPair } from "../../../Partials/IconTextPair";
import { ClickableEmail, ClickablePhone } from "../../../Partials/Clickables";
import ProfileThumb from "../Profiles/ProfileThumb";
import Button from "../../../Partials/Button";
import Price from "../../../Partials/Price";
import { acceptJobActionCreator, declineJobActionCreator } from "../../../Actions/JobsActions";

const Job = ({ job, dateFormat, acceptJobAction, declineJobAction }) => {
    const accept = () => {
        acceptJobAction();
    };

    const decline = () => {
        declineJobAction();
    };

    return (
        <div className="jobs-page-list-item">
            <div className="jobs-page-list-item-inner page-section border">
                <div className="jobs-page-list-item-header">
                    {/* In real app would need to pass stuff in here, but for this just randomly generate an image for funsies */}
                    <ProfileThumb />
                    <div className="jobs-page-list-item-header-details">
                        <div className="jobs-page-list-item-header-title">{job.contact_name}</div>
                        <div className="jobs-page-list-item-header-date">Posted: {moment(job.created_date).format(dateFormat)}</div>
                    </div>
                </div>

                <div className="jobs-page-list-item-info">
                    <IconTextPair icon={`/img/icons8-place-marker-50.png`} text={`${job.suburb_name} ${job.postcode}`} />
                    <IconTextPair icon={`/img/job-category/${job.icon_filename}`} text={job.category_name} />
                    <IconTextPair text={`Job ID: ${job.id}`} />
                    {job.status === "accepted" && <IconComponentPair><Price amount={job.price} rate={1} symbol="$" /> Lead Invitation</IconComponentPair>}
                </div>

                {
                    job.status === "accepted" &&
                    <div>
                        {
                            job.contact_phone &&
                            <IconComponentPair icon="/img/icons8-phone-50.png">
                                <ClickablePhone phone={job.contact_phone} text={job.contact_phone} />
                            </IconComponentPair>
                        }

                        {
                            job.contact_email &&
                            <IconComponentPair icon="/img/icons8-email-50.png">
                                <ClickableEmail email={job.contact_email} text={job.contact_email} />
                            </IconComponentPair>
                        }
                    </div>
                }

                <div className="jobs-page-list-item-description">{job.description}</div>

                {
                    job.status === "new" &&
                    <div className="jobs-page-list-item-links">
                        <Button onClick={accept} primary>Accept</Button>
                        <Button onClick={decline}>Decline</Button>
                        <Price amount={job.price} rate={1} symbol="$" /> Lead Invitation
                    </div>
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, { id }) => ({
    dateFormat: state.SettingsReducer.site.dateDisplayFormat,
    job: getJobDetails(state.JobsReducer.jobs, id),
});

const mapDispatchToProps = (dispatch, { id }) => ({
    acceptJobAction: () => dispatch(acceptJobActionCreator(acceptJob(id))),
    declineJobAction: () => dispatch(declineJobActionCreator(declineJob(id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Job));
