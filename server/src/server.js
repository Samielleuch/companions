const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config/config");
const app = express();

app.use(logger("dev"));

app.use(cors());
app.use(bodyParser.json());

require("./router/router")(app);
app.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
