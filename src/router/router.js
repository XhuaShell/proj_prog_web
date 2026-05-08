import { Router } from "express";
import PublicRouter from "./public.route.js";
import ErrorRouter from "./error.route.js";

const MainRouter = Router();

MainRouter.use(PublicRouter);
MainRouter.use("/error", ErrorRouter);

export default MainRouter;
