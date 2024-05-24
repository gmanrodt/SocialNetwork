const router = require("express").Router();

const userRoutes = require("./user");
const thoughtRoutes = require("./thought");
const friendRoutes = require("./freinds");


router.use("/user", userRoutes);
router.use("/thought", thoughtRoutes);
router.use("/", );

module.exports = router;