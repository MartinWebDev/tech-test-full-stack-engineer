import * as express from "express";

import includeJobsRoutes from "./api/jobs";
import includeCategoriesRoutes from "./api/categories";

const api = express.Router();

/**
 * Main route, test function
 */
api.get("/", async function (req, res, next) {
    const val = await getSample();

    res.json({ sample: "TEST", someValue: val });
});

includeJobsRoutes(api);
includeCategoriesRoutes(api);

/**
 * Test function for async funtion
 */
async function getSample() {
    return new Promise((res, rej) => {
        res("Some Value");
    });
}

export { api };
