import express from "express";
import session from "express-session";
import genFunc from "connect-pg-simple";
import ejs from "ejs";

import path from "path";
import { fileURLToPath } from "url";

import { CONNECTION_STRING, PORT } from "./config/config.js";
import MainRouter from "./router/router.js";
import { sessionAPP } from "./config/session.js";

// Initial project path
const dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Template engine
app.set("view engine", "ejs");

// In this line we define the directory that contains the ejs files
app.set("views", path.join(dirname, "/view/template"));

// Sessions Config
app.set("trust proxy", 1); // trust first proxy
app.use(sessionAPP);

app.get("/whoami", async (req, res) => {
  const name = req.session.user;
  console.log(req.session.user);
  res.send(`Your name is: ${name.username}`);
});

app.get("/whoami2", (req, res) => {
  console.log(req.session);
  res.json(req.session);
});

// Router with all applications paths
app.use(MainRouter);

// Define static files like html, imgs or css
app.use("/public", express.static(path.join(dirname, "/view/public")));

app.listen(PORT, () => {
  console.log(`Application runnig on port ${PORT}`);
});
