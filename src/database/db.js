import pg from "pg";
const { Pool } = pg;

import { envVariable } from "../config/envVariable.js";

const pool = new Pool({
  host: envVariable.dbHost,
  user: envVariable.dbUser,
  password: envVariable.dbPassword,
  database: envVariable.dbName,
  port: envVariable.dbPort,
});

export const executeQuery = async (text, params) => {
  try {
    const client = await pool.connect();
    const result = await client.query(text, params);
    return result.rows; // Return only the rows for convenience
  } catch (error) {
    console.error("Database Query Error:", error);
    throw error;
  } finally {
    // client.release();
  }
};
