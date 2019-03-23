import Types from "../Actions/_Types";

export const fetchJobs = async () => {
    let url = "http://localhost:8080/api/jobs"; // GET URL FROM SETTINGS/ENV

    const response = await fetch(url, {
        headers: {
            Accept: "application/json"
        }
    });

    const jobs = await response.json();

    if (!response.ok || !jobs) {
        const error = new Error("Failed to fetch jobs");
        error.status = response.status;

        throw error;
    }

    return jobs;
}

export default store => next => action => {
    const ret = next(action);

    // If wanting to do any actions in middleware, grab the action here
    switch (action.type) {
        default: {
            break;
        }
    }

    return ret;
}
