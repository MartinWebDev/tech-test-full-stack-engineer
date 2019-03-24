// Libraries
import * as express from "express";
import * as cors from "cors";

// Routes
import { api } from "./routes";

// Server init
const server = express();
const port = 8080;

// Server setup
server.use(cors());

// Server route setup
server.use('/api', api);

server.get("/", (req, res) => {
    res.send("Hello World"); // Entry point of react app would go here if on same server
});

server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
