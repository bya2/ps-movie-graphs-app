// GET /movie/latest
const endpoint__tmdb__movies__now_playing = "/movie/now_playing";
const endpoint__tmdb__movies__upcoming = "/movie/upcoming";
const endpoint__tmdb__movies__popular = "/movie/popular";
const endpoint__tmdb__movies__top_rated = "/movie/top_rated";

const endpoint__tmdb__movies__latest = "/movie/latest";

// GET /movie/{movie_id}
const endpoint__tmdb__movie__id = (_movie_id) => `/movie/${_movie_id}`;

// GET /trending/{media_type}/{time_window}
const endpoint__tmdb__movies__trending_day = "/trending/movie/day";
const endpoint__tmdb__movies__trending_week = "/trending/movie/week";

// GET /image
const endpoint__img_tmdb = (_img_id, _img_size = "w500") =>
  `/${_img_size}/${_img_id}`;

// EXPORTS
module.exports = {
  endpoint__tmdb__movies__now_playing: endpoint__tmdb__movies__now_playing,
  endpoint__tmdb__movies__upcoming: endpoint__tmdb__movies__upcoming,
  endpoint__tmdb__movies__latest: endpoint__tmdb__movies__latest,
  endpoint__tmdb__movies__popular: endpoint__tmdb__movies__popular,
  endpoint__tmdb__movies__top_rated: endpoint__tmdb__movies__top_rated,
  endpoint__tmdb__movie__id: endpoint__tmdb__movie__id,
  endpoint__tmdb__movies__trending_day: endpoint__tmdb__movies__trending_day,
  endpoint__tmdb__movies__trending_week: endpoint__tmdb__movies__trending_week,
  endpoint__img_tmdb,
};
