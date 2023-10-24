const { gotoHome } = require("../controllers/home");

const express = require("express");
const router = express.Router();

router.get("/", gotoHome);

module.exports = router;
