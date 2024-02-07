const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// Get/user
router.get("/", controller.user);

/*
[예시]
GET/user/aa
router.get("/aa",controller.a);

POST/user/login
router.post("/login",controller.b)
*/

module.exports = router;
