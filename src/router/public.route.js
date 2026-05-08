import { Router } from "express";
import { getIndex, getLogin, ping } from "../controller/public.controller.js";
import { publicMiddleware } from "../middleware/index.js";
import { loginUserAuth } from "../controller/auth.controller.js";

export const PublicRouter = Router();

PublicRouter.get("/", publicMiddleware, getIndex);
PublicRouter.get("/ping", publicMiddleware, ping);
PublicRouter.get("/login", publicMiddleware, getLogin);

PublicRouter.post("/login", publicMiddleware, loginUserAuth);

export default PublicRouter;
