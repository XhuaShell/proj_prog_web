import config from 'dotenv/config.js'

export const PORT = process.env.PORT | 3000;
export const SESSION_SECRET = process.env.SESSION_SECRET | "Hola";

export const CONNECTION_STRING = process.env.DB_URL;