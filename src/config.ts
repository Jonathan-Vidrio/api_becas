import { config } from "dotenv";
config();

const serverConfig = {
    port: process.env.PORT || 3000,
};

const mongoConfig = {
    url: process.env.MONGO_URL || "mongodb://localhost:27017",
};

export {
    serverConfig,
    mongoConfig,
};