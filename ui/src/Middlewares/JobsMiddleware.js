import Types from "../Actions/_Types";
// import { fetchJobsActionCreator } from "../Actions/JobsActions";

export const fetchJobs = async () => {
    let url = "https://s3-ap-southeast-2.amazonaws.com/hipgrp-assets/tech-test/jobs.json";

    const response = await fetch(url, {
        headers: {
            Accept: "application/json"
        }
    });

    const jobs = await response.json();

    if (!response.ok || !jobs) {
        const error = new Error("Failed to fetch favourites");
        error.status = response.status;

        throw error;
    }

    return jobs;
}

export default store => next => action => {
    const ret = next(action);

    switch (action.type) {
        case Types.FETCH_JOBS_TYPE + 'eee': {
            // store.dispatch(fetchJobsActionCreator(fetchJobs()));
            break;
        }
        default: {
            break;
        }
    }

    return ret;
}
