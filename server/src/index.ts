import * as express from "express";

const server = express();
const port = 8080;

server.get("/", (req, res) => {
    res.send("Hello World");
});

server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
