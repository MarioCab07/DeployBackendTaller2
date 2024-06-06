const express = require("express");
const router = express.Router();

const personController = require("../controllers/person.controller");

router.post("/add",personController.add);

router.get("/get/:identifier",personController.findPersonByFamily);

router.delete("/delete/:identifier",personController.delete);

module.exports = router;