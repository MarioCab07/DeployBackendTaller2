const express = require("express");
const router = express.Router();

const familyController = require("../controllers/family.controller");

router.post("/add",familyController.add);

router.get("/get",familyController.findAll);

router.delete("/delete/:identifier",familyController.delete);

module.exports = router;