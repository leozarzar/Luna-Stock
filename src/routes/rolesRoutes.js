const {Router} = require("express");
const RoleController = require("../controllers/RoleController.js");

const router = Router();

router.get("/roles");
router.get("/roles/:id");
router.post("/roles", RoleController.addRole);
router.patch("/roles/:id");
router.delete("/roles/:id");
router.delete("/roles/deleteAll");

module.exports = router;