import { Router } from "express";
import PublicRouter from "./public.router.js";

const MainRouter = Router();

MainRouter.use(PublicRouter);

export default MainRouter;
