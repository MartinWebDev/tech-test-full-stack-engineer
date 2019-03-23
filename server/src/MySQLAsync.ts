/**
 * Just a basic little wrapper so I can make standard string based queries in async functions rather than using nasty callbacks. 
 * It's 2019, callbacks are dead :P
 */
class MySQLAsync {
    private connection;

    constructor(conn) {
        this.connection = conn;
    }

    queryAsync = async (qs) => {
        return await this.queryPromise(qs);
    }

    private queryPromise = (qs: String) => {
        return new Promise((res, rej) => {
            this.connection.connect();
            this.connection.query(qs, (error, results, fields) => {
                this.connection.end();
                if (error) rej(error);

                res(results);
            });
        });
    }
}

export default MySQLAsync;
