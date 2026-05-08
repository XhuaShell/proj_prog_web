import { Router } from "express";
import {
  sessionError,
  unfinishedFunctionError,
} from "../controller/error.controller.js";
import { authSessionMiddleware } from "../middleware/auth.middleware.js";

export const ErrorRouter = Router();

ErrorRouter.get("/session", sessionError);

ErrorRouter.get("/test", authSessionMiddleware, (req, res) => {
  res.send("Testing");
});

ErrorRouter.get(
  "/unfinishedFunction",
  authSessionMiddleware,
  unfinishedFunctionError,
);

export default ErrorRouter;
