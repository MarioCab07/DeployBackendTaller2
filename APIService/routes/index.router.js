const express = require("express")
const router = express.Router();

const familyRouter = require("./family.router");
const personRouter = require("./person.router");

router.use("/family",familyRouter);
router.use("/person",personRouter);


module.exports = router;
