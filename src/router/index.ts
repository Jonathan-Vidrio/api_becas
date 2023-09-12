import { Router } from "express";
import authentication from "./authentication.routes";
import user from "./user.routes";

const router = Router();

export default (): Router => {
    authentication(router);
    user(router);

    return router;
};