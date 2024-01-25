const express = require("express");

// rest object
const app = express();

// route
app.get("/", (req, res) => {
  return res.status(200).send("<h1> welcome to food server <h1>");
});

const Port = 8080;

app.listen(Port, () => {
  console.log("server running");
});
