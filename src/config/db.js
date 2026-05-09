import { CONNECTION_STRING } from "./config.js";

if (!CONNECTION_STRING) throw new Error("DATABASE_URL: Conect url is required");

export const POOL_DB = new Pool({
  connectionString: process.env.DATABASE_URL,
});