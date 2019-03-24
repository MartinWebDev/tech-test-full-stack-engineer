import * as mysql from "mysql";

/**
 * Return default connection for this app
 */
export const getConnection = () => {
    // Lazy local version
    // return mysql.createConnection({
    //     host: "localhost",
    //     user: "root",
    //     password: "hipages",
    //     database: "hipages"
    // });

    // Production version
    return mysql.createConnection({
        host: process.env.DB_SERVER,
        user: process.env.DB_USERNAME,
        port: process.env.DB_PORT,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });
};
