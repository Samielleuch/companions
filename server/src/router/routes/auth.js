const express = require("express");
const router = express.Router();
const AuthController = require("../../controllers/AuthenticationController");
//the root route for this file is /api/v1/auth/
router.post("/register", (req, res) => {
  AuthController.register(req, res);
});

module.exports = router;
