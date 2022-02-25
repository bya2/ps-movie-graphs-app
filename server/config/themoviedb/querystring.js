const tmdb__api_key = process.env.TMDB__API_KEY;
const tmdb__language = "ko-KR";
const tmdb__region = "KR";

exports.qs__tmdb__movie = () => {
  // https://developers.themoviedb.org/3/movies/get-movie-details
  // api_key, language, append_to_response
  return {
    api_key: tmdb__api_key,
    language: tmdb__language,
  };
};

exports.qs__tmdb__movies = (_page = 1) => {
  // https://developers.themoviedb.org/3/movies/get-now-playing
  // api_key, language, page, region
  return {
    api_key: tmdb__api_key,
    language: tmdb__language,
    region: tmdb__region,
    page: _page,
  };
};

exports.qs__tmdb__trending_movies = (_page = 1) => {
  // https://developers.themoviedb.org/3/trending/get-trending
  // api_key, language
  return {
    api_key: tmdb__api_key,
    language: tmdb__language,
    page: _page,
  };
};
