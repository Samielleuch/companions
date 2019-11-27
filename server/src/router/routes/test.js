const express = require("express");
const router = express.Router();
//the root route for this file is /api/v1/test/
router.post("/", (req, res) => {
    res.send("yup works !")
});

module.exports = router;
