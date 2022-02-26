const {
  fn_GET__tmdb__movies__now_playing,
} = require("../../logic/api/themoviedb");

const Model_NowPlaying = require("../../model/now_playing");

const fn_service__movies__now_playing = async () => {
  let movie_ids__all_pages__arr = [];

  /**
   * Pages
   */
  for (let page = 1; page <= 2; ++page) {
    const res_data__obj = await fn_GET__tmdb__movies__now_playing(page);

    if (!res_data__obj) break;

    const { code, message, results } = res_data__obj;

    const movie_ids__arr = results.reduce(
      (arr, movie__obj) => [...arr, { id: movie__obj.id }],
      []
    );

    movie_ids__all_pages__arr = [
      ...movie_ids__all_pages__arr,
      ...movie_ids__arr,
    ];
  }

  return all_pages_results__arr;
};

module.exports = fn_service__movies__now_playing;
