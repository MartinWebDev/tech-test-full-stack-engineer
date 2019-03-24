import MySQLAsync from "../../MySQLAsync";

import { getConnection } from "../../utils/db";

const includeJobsRoutes = (api) => {
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

    /**
     * /jobs route, get all jobs from db
     */
    api.get("/jobs", async (req, res, next) => {
        const connection = getConnection();
        const db = new MySQLAsync(connection);

        try {
            // const results = await db.queryAsync("SELECT * FROM jobs WHERE status NOT IN ('closed', 'declined')");
            const results = await db.queryAsync(
                `SELECT J.id, J.status, J.contact_name, J.price, J.description, J.created_at,
                    C.id AS category_id, C.name AS category_name, C.icon_filename,
                    S.id AS suburb_id, S.name AS suburb_name, S.postcode,
                    CASE WHEN J.status = 'accepted' THEN J.contact_phone ELSE NULL END AS contact_phone,
                    CASE WHEN J.status = 'accepted' THEN J.contact_email ELSE NULL END AS contact_email
                FROM jobs J
                INNER JOIN categories C ON C.id = J.category_id
                INNER JOIN suburbs S ON S.id = J.suburb_id
                WHERE status NOT IN ('closed', 'declined')`
            );

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
            // const results = await db.queryAsync(`SELECT * FROM jobs WHERE id = ${req.params.id}`);
            const results = await db.queryAsync(
                `SELECT J.id, J.status, J.contact_name, J.price, J.description, J.created_at,
                    C.id AS category_id, C.name AS category_name, C.icon_filename,
                    S.id AS suburb_id, S.name AS suburb_name, S.postcode,
                    CASE WHEN J.status = 'accepted' THEN J.contact_phone ELSE NULL END AS contact_phone,
                    CASE WHEN J.status = 'accepted' THEN J.contact_email ELSE NULL END AS contact_email
                FROM jobs J
                INNER JOIN categories C ON C.id = J.category_id
                INNER JOIN suburbs S ON S.id = J.suburb_id
                WHERE J.id = ${req.params.id}`
            );

            res.json({ job: results[0] });
        }
        catch (ex) {
            res.status(500);
            res.json({ error: ex });
        }
    });

    api.get("/jobs/:id/additional", async (req, res, next) => {
        const connection = getConnection();
        const db = new MySQLAsync(connection);

        try {
            const results = await db.queryAsync(
                `SELECT J.id, J.contact_phone, J.contact_email
                FROM jobs J
                WHERE J.id = ${req.params.id}`
            );

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
};

export default includeJobsRoutes;
