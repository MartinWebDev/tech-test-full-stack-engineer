import MySQLAsync from "../../MySQLAsync";

import { getConnection } from "../../utils/db";

const includeJobsRoutes = (api) => {
    /**
     * /jobs route, get all jobs from db
     */
    api.get("/jobs", async (req, res, next) => {
        const connection = getConnection();
        const db = new MySQLAsync(connection);

        try {
            const results = await db.queryAsync("SELECT * FROM jobs WHERE status NOT IN ('closed', 'declined')");
            res.json({ jobs: results });
        }
        catch (ex) {
            res.status(500);
            res.json({ error: ex });
        }
    });

    api.get("/jobs/:id", async (req, res, next) => {
        const connection = getConnection();
        const db = new MySQLAsync(connection);

        try {
            const results = await db.queryAsync(`SELECT * FROM jobs WHERE id = ${req.params.id}`);
            res.json({ job: results[0] });
        }
        catch (ex) {
            res.status(500);
            res.json({ error: ex });
        }
    });

    api.post("/jobs/:id/accept", async (req, res, next) => {
        const connection = getConnection();
        const db = new MySQLAsync(connection);

        try {
            const results: any = await db.queryAsync(`UPDATE jobs SET status = 'accepted' WHERE id = ${req.params.id}`);

            if (results.affectedRows === 0) {
                throw new Error("ID was not found in database!");
            }

            res.status(200);
            res.json({ status: "ok" });
        }
        catch (ex) {
            res.status(500);
            res.json({ error: ex });
        }
    });

    api.post("/jobs/:id/decline", async (req, res, next) => {
        const connection = getConnection();
        const db = new MySQLAsync(connection);

        try {
            const results: any = await db.queryAsync(`UPDATE jobs SET status = 'declined' WHERE id = ${req.params.id}`);

            if (results.affectedRows === 0) {
                throw new Error("ID was not found in database!");
            }

            res.status(200);
            res.json({ status: "ok" });
        }
        catch (ex) {
            res.status(500);
            res.json({ error: ex });
        }
    });

    // Would not make something like this in real life, this is just for my secret reset button which is quicker than restarting docker.
    api.get("/jobs/restoreall", async (req, res, next) => {
        const connection = getConnection();
        const db = new MySQLAsync(connection);

        try {
            const results: any = await db.queryAsync(`UPDATE jobs SET status = 'new'`);

            res.status(200);
            res.json({ status: "ok" });
        }
        catch (ex) {
            res.status(500);
            res.json({ error: ex });
        }
    });
};

export default includeJobsRoutes;
