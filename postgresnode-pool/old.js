import express from "express";
import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", async (req, res) => {
  const fromDate = new Date();
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
  res.send({ rows: results.rows, elapsed: elapsed, method: "Old" });

  return;
});

app.listen(3000, () => console.log("Port is listening on 300"));
