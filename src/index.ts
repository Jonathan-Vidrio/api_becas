import { app } from "./app";
import http from "http";
import { serverConfig } from "./config";
import "./database/connection"

const main = () => {
    const server = http.createServer(app);
    const port = serverConfig.port || 3000;
    server.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
};

main();