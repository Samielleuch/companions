module.exports = {
  register(req, res) {
    const mongoose = require("mongoose");
    const User = require("../models/User");
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      pass: req.body.pass
    });
    user
      .save()
      .then(result => {
        console.log(result);
        res.send(req.body.email);
      })
      .catch(err => {
        console.log(err);
        res.send({ error: err });
      });
  }
};
