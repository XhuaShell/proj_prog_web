import { Router } from "express";
import { getPanel } from "../model/panel.js";
import PublicRouter from "./public.route.js";
import ErrorRouter from "./error.route.js";

const MainRouter = Router();

MainRouter.use(PublicRouter);
MainRouter.use("/error", ErrorRouter);

MainRouter.get("/panel/:type", (req, res) => {
  const type = req.params.type; // admin, seller, customer
  const panelInfo = getPanel(type);
  const user = {
    username: "Kevin" // Aca ira lo del login
  };
  res.render(`panel/${type}Panel`, {
    panelInfo,
    user
  });
});

export default MainRouter;
