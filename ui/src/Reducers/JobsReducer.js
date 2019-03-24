import { ActionType } from 'redux-promise-middleware'
import update from "immutability-helper";

import Types from "../Actions/_Types";
import InitialState from "./InitialState/Jobs";

const JobsReducer = (state = InitialState, action) => {
    switch (action.type) {
        /**
         * Fetch Jobs
         */
        case `${Types.FETCH_JOBS_TYPE}_${ActionType.Pending}`: {
            return update(state, {
                loading: { $set: true }
            });
        }
        case `${Types.FETCH_JOBS_TYPE}_${ActionType.Fulfilled}`: {
            return update(state, {
                loading: { $set: false },
                loaded: { $set: true },
                jobs: { $set: action.payload.jobs }
            });
        }
        case `${Types.FETCH_JOBS_TYPE}_${ActionType.Rejected}`: {
            return update(state, {
                loading: { $set: false },
                loaded: { $set: false },
                error: { $set: action.payload }
            });
        }

        /**
         * Accept Job
         */
        // case `${Types.ACCEPT_JOB}_${ActionType.Pending}`: {
        //     return update(state, {
        //         loading: { $set: true }
        //     });
        // }
        case `${Types.ACCEPT_JOB}_${ActionType.Fulfilled}`: {
            return update(state, {
                jobs: {
                    $apply: (thejobs) => thejobs.map((job) => {
                        if (job.id === action.payload.det.job.id) {
                            job.contact_phone = action.payload.det.job.contact_phone
                            job.contact_email = action.payload.det.job.contact_email
                            job.status = "accepted"; // Should be set in a consts file, or better still, fetched from db
                        }

                        return job;
                    })
                }
            });
        }
        case `${Types.ACCEPT_JOB}_${ActionType.Rejected}`: {
            return update(state, {
                error: { $set: action.payload }
            });
        }

        /**
         * Decline Job
         */
        // case `${Types.DECLINE_JOB}_${ActionType.Pending}`: {
        //     return update(state, {
        //         loading: { $set: true }
        //     });
        // }
        case `${Types.DECLINE_JOB}_${ActionType.Fulfilled}`: {
            return update(state, {
                jobs: {
                    $apply: (thejobs) => thejobs.map((job) => {
                        if (job.id === action.payload.id) {
                            job.status = "declined"; // Should be set in a consts file, or better still, fetched from db
                        }

                        return job;
                    })
                }
            });
            // const index = state.jobs.map((j) => j.id).indexOf(action.payload.id);
            // console.log(index);
            // return update(state, {
            //     jobs: { $splice: [[index, 1]] }
            // });
        }
        case `${Types.DECLINE_JOB}_${ActionType.Rejected}`: {
            return update(state, {
                error: { $set: action.payload }
            });
        }
        default: {
            return state;
        }
    }
};

export default JobsReducer;
