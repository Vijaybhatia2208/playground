import express from "express";
import { Client, Pool } from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

let oldCount = 0;
let oldSum = 0;
let poolCount = 0;
let poolSum = 0;

const app = express();

app.use(cors());

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

app.get("/old", async (req, res) => {
  const fromDate = new Date();
  oldCount++;
  const client = new Client({
    host: HOST,
    post: PORT,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
  });

  // connect
  await client.connect(); // expensive
  const results = await client.query("select * from employees"); // never do this on prod

  console.table(results.rows);

  client.end();

  const toDate = new Date();

  const elapsed = toDate.getTime() - fromDate.getTime();
  oldSum += elapsed;
  res.send({
    rows: results.rows,
    elapsed: elapsed,
    avg: Math.round(oldSum / oldCount),
    method: "Old",
  });

  return;
});

app.get("/new", async (req, res) => {
  const fromDate = new Date();
  poolCount++;
  // connect

  const results = await pool.query("select * from employees"); // never do this on prod

  console.table(results.rows);
  const toDate = new Date();

  const elapsed = toDate.getTime() - fromDate.getTime();
  poolSum += elapsed;
  res.send({
    rows: results.rows,
    elapsed: elapsed,
    avg: Math.round(poolSum / poolCount),
    method: "pool",
  });

  return;
});

app.listen(3000, () => console.log("Port is listening on 300"));

/*
for (let i = 0; i < 1000; i++) fetch(`http://localhost:3000/old`).then(a=>a.json()).then(console.log).catch(console.error); 
avg: 8
for (let i = 0; i < 1000; i++) fetch(`http://localhost:9000/pool`).then(a=>a.json()).then(console.log).catch(console.error);
avg: 0
*/
