const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(cors());

// app
//   .route("/hello")
//   .get((req, res) => {
//     res.send("Hello World");
//   })

app.get("/dogs", (req, res) => {
  res.send("RUFF RUFF");
});

app.get("/hello", (req, res) => {
  res.send("Hi Guys");
});

app.get("/cats", (req, res) => {
  res.send("MEOW");
});

app.listen(PORT, () => {
  console.log("Server listening on: " + PORT);
});