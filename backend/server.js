import mysql from 'mysql2'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

const app = express();
app.use(express.json()); // Add this line to parse JSON

dotenv.config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass#67Ts",
  database: "proj",
});

connection.connect((err) => {
  if (err) {
    console.log("MySQL not connected");
    throw err;
  }
  console.log("MySQL connected");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});

app.post("/user", (req, res) => {
  const sql = "INSERT INTO AdopterApplicant ('name') VALUES (?)";
  const values = 
    [req.body.name];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error inserting user into database");
    } else {
      res.status(200).send("User added to database");
    }
  });
});
