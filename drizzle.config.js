import config from 'dotenv/config.js'
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: "./src/database/schema/index.js",
  out: "./src/database/migration",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_URL,
  },
});