import session from "express-session";
import genFunc from "connect-pg-simple";

import { CONNECTION_STRING } from "./config.js";

// Connection db with simple-pg-conecctor
const PostgresqlStore = genFunc(session);
const sessionStore = new PostgresqlStore({
  conString: CONNECTION_STRING,
  createTableIfMissing: true,
});

// This is where the session is created in express.
export const sessionAPP = session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24,
  },
  store: sessionStore,
});
