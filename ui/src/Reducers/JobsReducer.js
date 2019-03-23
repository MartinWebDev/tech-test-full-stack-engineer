import { ActionType } from 'redux-promise-middleware'
import update from "immutability-helper";

import Types from "../Actions/_Types";
import InitialState from "./InitialState/Jobs";

const JobsReducer = (state = InitialState, action) => {
    switch (action.type) {
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
        default: {
            return state;
        }
    }
};

export default JobsReducer;
