import Types from "./_Types";

export const fetchJobsActionCreator = (promise) => ({
    type: Types.FETCH_JOBS_TYPE,
    payload: promise
});

export const acceptJobActionCreator = (promise) => ({
    type: Types.ACCEPT_JOB,
    payload: promise
});

export const declineJobActionCreator = (promise) => ({
    type: Types.DECLINE_JOB,
    payload: promise
});
