const router = require("express").Router();
const { fn_service__movies__now_playing } = require("../../service/movies");
const { fn_service__movie__detail } = require("../../service/movie");

/**
 * GET
 */
router.get("/now_playing", async (req, res) => {
  console.log("Receive: api/movies/now_playing");

  const movies__all_pages__arr = await fn_service__movies__now_playing();

  const movie_details__arr = await Promise.all(
    movies__all_pages__arr.map(async (movie__obj) => {
      const movie_id = movie__obj.id;
      const movie_detail__obj = await fn_service__movie__detail(movie_id);
      return movie_detail__obj;
    })
  ).catch((err) => console.error(err));

  res.json({
    results: movie_details__arr,
  });
});

router.get("/upcoming", (req, res) => {
  console.log("Receive: api/movies/upcoming");

  res.json({
    results: [
      {
        id: 1,
        title: "a",
      },
      {
        id: 2,
        title: "b",
      },
      {
        id: 3,
        title: "c",
      },
    ],
  });
});

router.get("/popular", (req, res) => {
  console.log("Receive: api/movies/popular");

  res.json({
    results: [
      {
        id: 1,
        title: "a",
      },
      {
        id: 2,
        title: "b",
      },
      {
        id: 3,
        title: "c",
      },
    ],
  });
});

router.get("/latest", (req, res) => {
  console.log("Receive: api/movies/latest");

  res.json({
    results: [
      {
        id: 1,
        title: "a",
      },
      {
        id: 2,
        title: "b",
      },
      {
        id: 3,
        title: "c",
      },
    ],
  });
});

module.exports = router;
