import Types from "./_Types";

export const init = () => ({
    type: Types.GET_INITIAL_SETTINGS
});

export const goToJobsPage = () => ({
    type: "GOTO_JOBS"
});
