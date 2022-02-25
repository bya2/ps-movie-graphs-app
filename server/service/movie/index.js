const { fn_GET__tmdb__movie__id } = require("../../logic/api/themoviedb");
const Detail = require("../../model/details");

exports.fn_service__movie__detail = async (_id) => {
  return Detail.findOne({ id: _id })
    .exec()
    .then((result__obj) => {
      if (result__obj) {
        return {
          code: 200,
          message: "success service",
          results: [result__obj],
        };
      } else {
        return fn_GET__tmdb__movie__id(_id).then((data__obj) => {
          const { code, message, results } = data__obj;

          switch (code) {
            case 200:
              const obj_movie_detail = new Detail(results[0]);
              obj_movie_detail
                .save()
                .then(() => {
                  console.log("success");
                })
                .catch((err) => {
                  console.log("fail save data (mongoose)");
                  console.error(err);
                });

              return {
                code: 200,
                message: "success service",
                results: [results[0]],
              };
            case 401:
              return {
                code: 404,
                message,
                results: [],
              };
            case 404:
              return {
                code: 404,
                message,
                results: [],
              };
          }
        });
      }
    })
    .catch((err) => {
      console.log("!ERR\nLoc:service/movie/detail");
      console.error(err);
      return null;
    });
};
