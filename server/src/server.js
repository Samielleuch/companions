const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());

app.get("/status", (req, res) => res.send({ message: "Hello World" }));

const hostname = "localhost";
const port = process.env.PORT || 8081;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
