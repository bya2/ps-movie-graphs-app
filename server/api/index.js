const router = require("express").Router();

router.use("/movie", require("./movie"));
router.use("/movies", require("./movies"));

module.exports = router;
