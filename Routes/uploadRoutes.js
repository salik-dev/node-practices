const express = require("express");
const { add } = require("../Controllers/uploadControllers");

const router = express.Router();

router.post("/", add);

module.exports = router;
