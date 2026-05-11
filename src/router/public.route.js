import { Router } from "express";
import { getIndex } from "../controller/public.controller.js";
import { publicMiddleware } from "../middleware/public.middleware.js";
import { getLogin, getRegister, loginUserAuth, logoutAuth, registerAuth } from "../controller/auth.controller.js";

export const PublicRouter = Router();

PublicRouter.get("/", publicMiddleware, getIndex);

PublicRouter.get("/login", publicMiddleware, getLogin);
PublicRouter.post("/login", publicMiddleware, loginUserAuth);

PublicRouter.get("/register", publicMiddleware, getRegister);
PublicRouter.post("/register", publicMiddleware, registerAuth);

PublicRouter.post("/logout", publicMiddleware, logoutAuth)

export default PublicRouter;
