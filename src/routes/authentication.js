const express = require("express");
const { login, register } = require("../controller/auth.controller");
const authenticate = require("../middleware/authentication")
const authorise = require("../middleware/authorise");


const router = express.Router()

router.route( '/login')
.post(login)


router.route('/register')
.post(authenticate, authorise(["Admin"]), register)

module.exports = router;