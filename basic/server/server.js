const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// middleware that allows Cross-Origin Resource Sharing (CORS)
app.use(cors());

// middleware to parse incoming data
app.use(bodyParser.json());

// middleware that sets root directory
app.use(express.static("server/public"));

// set the port that the server will run on
const PORT = 5000;

// 'listen' starts up the server
// in this case it will be running at localhost:5000 in your browser
// 'npm start' in the command line starts the server
// ctrl+c in the command line stops the server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

// basic GET request
// gets data from the server for client-side use
// '/taco' is the url path this method is using
// req is short for 'request'
// res is short for 'response'
// res.send sends back whatever is in the parentheses
// open localhost:5000/taco in your browser!
app.get("/taco", (req, res) => {
  res.send(`Congratulations! You're well on your way to becoming a backend master :)`);
});

// ** start count code block **
let count = 0;

// '/count' is the url path this method is using
// this time res.send is sending back a variable
// count is being returned in brackets
// so it isn't confused with an http code (like 404, etc)
// console.logs print out in the command line
app.get("/count", (req, res) => {
  console.log("Finding /count GET...");
  res.send([count]);
});

// basic PUT request
// modifies or updates data
// count will increment until the server is reset
// sendStatus returns http code
// 200 means 'OK'
app.put("/count", (req, res) => {
  console.log("Doing math in /count GET...");
  count++;
  res.sendStatus(200);
});
// ** end count code block **

// ** start username code block **
let name = "";

// no brackets needed for strings
// you don't need console logs
// but they're a good way for beginners to track things
app.get("/username", (req, res) => {
  res.send(name);
});

// basic POST request
// creates new data
// req.body holds the data sent from the client
// in this case we are sending back the username
// http code 201 means 'created'
app.post("/username", (req, res) => {
  console.log("/name POST request body:", req.body);
  name = req.body.username;
  res.sendStatus(201);
});
// ** end username code block **
