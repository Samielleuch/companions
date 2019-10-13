const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config/config");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
 //MidlleWares
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
//requiring routes
require("./router/router")(app);
//connecting to MongoDb
mongoose.connect(
  `mongodb+srv://${config.db.dbUser}:${config.db.dbPassword}@${config.db.dbName}-ubg8j.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.get('/' , (req,res)=>res.send('hi'));
//Handle production
if (process.env.NODE_ENV ==='production') {
  //static
  let a =path.resolve(__dirname ,'../server/public' ).then((name)=>  app.use(express.static(name))
) .catch(err => console.log(err));
  //Handle frontend
  //app.get(/.*/, (req,res) => res.sendFile(path.resolve(__dirname ,'../public' )+'/index.html'));
}
app.listen(config.port, config.hostname, () => {
  console.log(`Server running at ${config.hostname}/`);
});
