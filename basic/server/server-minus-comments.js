const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("server/public"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

// ** start count code block **
let count = 0;

app.get("/count", (req, res) => {
  res.send([count]);
});

app.put("/count", (req, res) => {
  count++;
  res.sendStatus(200);
});
// ** end count code block **

// ** start username code block **
let name = "";

app.get("/username", (req, res) => {
  res.send(name);
});

app.post("/username", (req, res) => {
  name = req.body.username;
  res.sendStatus(201);
});
// ** end username code block **
