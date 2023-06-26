const express = require("express");
const router = express.Router();

const ArgonauteCtrl = require("../controllers/argonaute");

router.post("/createArgonaute", ArgonauteCtrl.createArgonaute);
router.get("/getAllArgonautes", ArgonauteCtrl.getAllArgonautes);
router.patch("/updateArgonaute/:id", ArgonauteCtrl.updateArgonaute);
router.delete("/deleteArgonaute/:id", ArgonauteCtrl.deleteArgonaute);

module.exports = router;
