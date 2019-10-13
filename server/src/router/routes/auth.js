const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//the root route for this file is /api/v1/auth/
const User = require('../../models/User');

router.post('/register', (req,res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId() ,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        pass : req.body.pass,
    });
    user.save().then( result => console.log(result)).catch(err => console.log(err));
    res.send(req.body.email);
});

module.exports = router;
