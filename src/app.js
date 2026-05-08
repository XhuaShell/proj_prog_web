import express from "express";
import session from "express-session";
import ejs from "ejs";

import path from "path";
import { fileURLToPath } from "url";

import { PORT } from "./config/config.js";
import MainRouter from "./router/router.js";

// Initial project path
const dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Template engine
app.set("view engine", "ejs");

// In this line we define the directory that contains the ejs files
app.set("views", path.join(dirname, "/view/template"));

app.set("trust proxy", 1); // trust first proxy

// This is where the session is created in express.
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
);

// Router with all applications paths
app.use(MainRouter);

// Define static files like html, imgs or css
app.use("/public", express.static(path.join(dirname, "/view/public")));

app.listen(PORT, () => {
  console.log(`Application runnig on port ${PORT}`);
});
