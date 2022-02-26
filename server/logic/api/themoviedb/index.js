const {
  axios_ins__img_tmdb,
  axios_ins__tmdb,
} = require("../../../config/axios");
const {
  endpoint__tmdb__movie__id,
  endpoint__tmdb__movies__now_playing,
  endpoint__tmdb__movies__latest,
  endpoint__tmdb__movies__popular,
  endpoint__tmdb__movies__upcoming,
  endpoint__tmdb__movies__trending_day,
  endpoint__tmdb__movies__trending_week,
  endpoint__img_tmdb,
} = require("../../../config/themoviedb/endpoint");
const {
  qs__tmdb__movie,
  qs__tmdb__movies,
  qs__tmdb__trending_movies,
} = require("../../../config/themoviedb/querystring");

/**
 * A MOVIE
 */
exports.fn_GET__tmdb__movie__id = (_moive_id) => {
  const config__req__obj = {
    method: "GET",
    url: `${endpoint__tmdb__movie__id(_moive_id)}${qs__tmdb__movie()}`,
  };

  return axios_ins__tmdb(config__req__obj)
    .then((res) => {
      if (!res) throw Error("no response");
      const { status, data } = res;

      switch (status) {
        case 200:
          return {
            code: 200,
            message: "success",
            results: [data],
          };
        default:
          throw new Error("unknown code");
      }
    })
    .catch((err) => {
      if (err.response) {
        const { status, data } = err.response;
        const { status_message } = data;
        console.log(status_message);

        switch (status) {
          case 401:
            return {
              code: 401,
              message: status_message,
              results: [],
            };
          case 404:
            return {
              code: 404,
              message: status_message,
              results: [],
            };
          default:
            console.log(
              "!ERR:Unkown\nLoc:logic/api/themoviedb (fn_GET__tmdb__movie__id)"
            );
            console.error(err);
            process.exit(1);
        }
      }
    });
};

/**
 * MOVIES
 */
exports.fn_GET__tmdb__movies__now_playing = (_page = 1) => {
  const config__req__obj = {
    method: "GET",
    url: `${endpoint__tmdb__movies__now_playing}${qs__tmdb__movies(_page)}`,
  };

  return axios_ins__tmdb(config__req__obj)
    .then((res) => {
      if (!res) {
        console.log("no response");
        return null;
      }

      const { status, data } = res;
      const cond__is_200__status = status === 200;

      if (cond__is_200__status) {
        const { page, results } = data;

        return {
          code: status,
          message: "success-GET-now-playing",
          results: results,
        };
      } else {
        console.log("unknown status");
        return null;
      }
    })
    .catch((err) => {
      console.log("!ERR\nLoc: logic/api/themoviedb (GET/movie/now_playing)");
      console.error(err);
      return null;
    });
};

exports.fn_GET__tmdb__movies__latest = (_page = 1) => {
  const config__req__obj = {
    method: "GET",
    url: `${endpoint__tmdb__movies__latest}${qs__tmdb__movies(_page)}`,
  };

  return axios_ins__tmdb(config__req__obj).catch((err) => {
    console.log("!ERR\nLoc: logic/api/themoviedb (GET/movie/latest)");
    console.error(err);
    return null;
  });
};

exports.fn_GET__tmdb__movies__popular = (_page = 1) => {
  const config__req__obj = {
    method: "GET",
    url: `${endpoint__tmdb__movies__popular}${qs__tmdb__movies(_page)}`,
  };

  return axios_ins__tmdb(config__req__obj).catch((err) => {
    console.log("!ERR\nLoc: logic/api/themoviedb (GET/movie/popular)");
    console.error(err);
    return null;
  });
};

exports.fn_GET__tmdb__movies__upcoming = (_page = 1) => {
  const config__req__obj = {
    method: "GET",
    url: `${endpoint__tmdb__movies__upcoming}${qs__tmdb__movies(_page)}`,
  };

  return axios_ins__tmdb(config__req__obj).catch((err) => {
    console.log("!ERR\nLoc: logic/api/themoviedb (GET/movie/upcoming)");
    console.error(err);
    return null;
  });
};

/**
 * TRENDING
 */
exports.fn_GET__tmdb__movies__trending__day = (_page) => {
  const config__req__obj = {
    method: "GET",
    url: `${endpoint__tmdb__movies__trending_day}${qs__tmdb__trending_movies(
      _page
    )}`,
  };

  return axios_ins__tmdb(config__req__obj).catch((err) => {
    console.log("!ERR\nLoc: logic/api/themoviedb (GET/trending/movie/day)");
    console.error(err);
    return null;
  });
};

exports.fn_GET__tmdb__movies__trending__week = (_page) => {
  const config__req__obj = {
    method: "GET",
    url: `${endpoint__tmdb__movies__trending_week}${qs__tmdb__trending_movies(
      _page
    )}`,
  };

  return axios_ins__tmdb(config__req__obj).catch((err) => {
    console.log("!ERR\nLoc: logic/api/themoviedb (GET/trending/movie/week)");
    console.error(err);
    return null;
  });
};

/**
 * IMAGE
 */
exports.fn_GET__img_tmdb = (_img_id, _img_size = "w500") => {
  const config__req__obj = {
    method: "GET",
    url: `${endpoint__img_tmdb(_img_id, _img_size)}`,
  };

  return axios_ins__img_tmdb(config__req__obj).catch((err) => {
    console.log("!ERR\nLoc: logic/api/themoviedb (GET/image)");
    console.error(err);
    return null;
  });
};
