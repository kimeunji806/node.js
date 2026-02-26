const router = require("express").Router();
const ctrl = require("../controllers/authController");

// CUD
// ctrl.signup
router.post("/", ctrl.signup);
router.post("/login", ctrl.login);

module.exports = router;
