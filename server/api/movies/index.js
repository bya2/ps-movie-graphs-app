const router = require("express").Router();
const {
  fn_service__movies__now_playing,
  fn_service__movies__latest,
  fn_service__movies__popular,
  fn_service__movies__upcoming,
} = require("../../service/movies");
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

router.get("/upcoming", async (req, res) => {
  console.log("Receive: api/movies/upcoming");

  const movies__all_pages__arr = await fn_service__movies__upcoming();

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

router.get("/popular", async (req, res) => {
  console.log("Receive: api/movies/popular");

  const movies__all_pages__arr = await fn_service__movies__popular();

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

router.get("/latest", async (req, res) => {
  console.log("Receive: api/movies/latest");

  const movies__all_pages__arr = await fn_service__movies__latest();

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

module.exports = router;
