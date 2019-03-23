import MySQLAsync from "../../MySQLAsync";

import { getConnection } from "../../utils/db";

const includeJobsRoutes = (api) => {
    /**
     * /jobs route, get all jobs from db
     */
    api.get("/categories", async (req, res, next) => {
        const connection = getConnection();
        const db = new MySQLAsync(connection);

        try {
            const results = await db.queryAsync("SELECT * FROM categories");
            res.json({ categories: results });
        }
        catch (ex) {
            res.status(500);
            res.json({ error: ex });
        }
    });

    api.get("/categories/:id", async (req, res, next) => {
        const connection = getConnection();
        const db = new MySQLAsync(connection);

        try {
            const results = await db.queryAsync(`SELECT * FROM categories WHERE id = ${req.params.id}`);
            res.json({ category: results[0] });
        }
        catch (ex) {
            res.status(500);
            res.json({ error: ex });
        }
    });

    api.get("/categories/:id/jobs", async (req, res, next) => {
        const connection = getConnection();
        const db = new MySQLAsync(connection);

        try {
            const results = await db.queryAsync(`SELECT * FROM jobs WHERE category_id = ${req.params.id}`);
            res.json({ jobs: results });
        }
        catch (ex) {
            res.status(500);
            res.json({ error: ex });
        }
    });
};

export default includeJobsRoutes;
