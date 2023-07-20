const express = require("express");
const router = express.Router();
const csvController = require("../controllers/usersController");

router.route("/files").post(csvController.saveData);
router.route("/users").get(csvController.getData);

module.exports = router;
