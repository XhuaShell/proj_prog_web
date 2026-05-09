import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema/index.ts";
import { POOL_DB } from "../config/db.js";

export const DB = drizzle({
  client: POOL_DB,
  logger: {
    logQuery(query, params) {
      console.log("SQL:", query);
      console.log("PARAMS:", params);
    },
  },
  schema,
});
