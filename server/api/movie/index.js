const router = require("express").Router();

/**
 * GET
 */
router.get("/:movie_id", (req, res) => {
  console.log("Receive: api/movie/:movie_id");

  const { movie_id } = req.params;

  try {
  } catch (err) {}
});

module.exports = router;
