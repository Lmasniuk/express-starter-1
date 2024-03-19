const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(cors());

// app
//   .route("/hello")
//   .get((req, res) => {
//     res.send("Hello World");
//   })

app
  .get("/hello",(req, res) => {
    res.send("Hello World");
  })

app.listen(PORT, () => {
    console.log("Server listening on: " + PORT);
});
  