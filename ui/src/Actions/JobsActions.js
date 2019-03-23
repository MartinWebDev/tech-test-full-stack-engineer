import Types from "./_Types";

export const fetchJobsActionCreator = (promise) => ({
    type: Types.FETCH_JOBS_TYPE,
    payload: promise
});
