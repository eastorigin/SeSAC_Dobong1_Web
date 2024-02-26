const expess = require("express");
const router = expess.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
router.post("/result", controller.result);

module.exports = router;
