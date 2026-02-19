import express from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;

const pool = new Pool({
  host: HOST,
  post: PORT,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  max: 20,
  connectionTimeoutMillis: 0, // timeout connection 0 means we are waiting forever
  idleTimeoutMillis: 10, // when you want to destroy connection  if not used 0 means no destroy
});

app.get("/", async (req, res) => {
  const fromDate = new Date();

  // connect

  const results = await pool.query("select * from employees"); // never do this on prod

  console.table(results.rows);
  const toDate = new Date();

  const elapsed = toDate.getTime() - fromDate.getTime();
  res.send({ rows: results.rows, elapsed: elapsed, method: "New" });

  return;
});

app.listen(3000, () => console.log("Port is listening on 300"));
