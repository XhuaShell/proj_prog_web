import { Router } from "express";
import { getIndex, ping } from "../controller/public.controller.js";
import { publicMiddleware } from "../middleware/index.js";

export const PublicRouter = Router();

PublicRouter.get("/", publicMiddleware, getIndex);
PublicRouter.get("/ping", publicMiddleware, ping);

export default PublicRouter;
