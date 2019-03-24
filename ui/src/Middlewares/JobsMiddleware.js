// import Types from "../Actions/_Types";

export const fetchJobs = async () => {
    let url = "http://localhost:8080/api/jobs"; // TODO IN REAL APP - GET URL FROM SETTINGS/ENV

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

export const acceptJob = async (id) => {
    // Sample await all concept. Not really necessary here, but nice to demo
    let accept = acceptJobCall(id);
    let details = getAdditionJobDetails(id);

    let acc = await accept;
    let det = await details;

    return { det, acc };
};

const acceptJobCall = async (id) => {
    let url = `http://localhost:8080/api/jobs/${id}/accept`; // TODO IN REAL APP - GET URL FROM SETTINGS/ENV

    const response = await fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json"
        }
    });

    const result = await response.json();

    if (!response.ok) {
        const error = new Error("Failed to accept job");
        error.status = response.status;

        throw error;
    }

    return result;
};

/**
 * The idea here is to only fetch the phone number and email of jobs that have been accepted. Assuming this to be a privacy thing. 
 * I fetch these details upon accept rather than just hiding them to prevent some clever cookie inspecting the javascript and finding information they shouldn't.
 * @param {Number} id ID of job to get additional details of 
 */
const getAdditionJobDetails = async (id) => {
    let url = `http://localhost:8080/api/jobs/${id}/additional`; // TODO IN REAL APP - GET URL FROM SETTINGS/ENV

    const response = await fetch(url, {
        headers: {
            Accept: "application/json"
        }
    });

    const result = await response.json();

    if (!response.ok) {
        const error = new Error("Failed to accept job");
        error.status = response.status;

        throw error;
    }

    return result;
};

export const declineJob = async (id) => {
    let url = `http://localhost:8080/api/jobs/${id}/decline`; // TODO IN REAL APP - GET URL FROM SETTINGS/ENV

    const response = await fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json"
        }
    });

    // const result = 
    await response.json();

    if (!response.ok) {
        const error = new Error("Failed to decline job");
        error.status = response.status;

        throw error;
    }

    return { id };
};

/**
 * Middleware action handler if wanted for catching actions and doing stuff with them
 */
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
