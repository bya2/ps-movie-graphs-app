const { fn_GET__tmdb__movie__id } = require("../../logic/api/themoviedb");
const {
  fn_val__today__str,
  fn_val__date__str,
} = require("../../logic/date/today");

const Detail = require("../../model/details");

exports.fn_service__movie__detail = async (_id) => {
  return Detail.findOne({ id: _id })
    .exec()
    .then((result__obj) => {
      const today__str = fn_val__today__str();

      const graph_dots = result__obj.graph;
      const graph_dot__last = graph_dots[graph_dots.length - 1];
      const recent_date__str = fn_val__date__str(graph_dot__last.occured_at);

      const cond__is_result = result__obj && true;
      const cond__is_same__date__recent_and_today =
        recent_date__str === today__str;

      /**
       * 본래 데이터 존재
       */
      if (cond__is_result) {
        let updated_movie_detail__obj;

        if (!cond__is_same__date__recent_and_today) {
          const res_data__obj = await fn_GET__tmdb__movie__id(_id);
          const { code, message, results } = res_data__obj;
          const movie_detail__obj = results[0];

          switch (code) {
            case 200:
              updated_movie_detail__obj = await Detail.findOneAndUpdate(
                { id: _id },
                {
                  graph: [
                    ...graph_dots,
                    {
                      popularity: movie_detail__obj.popularity,
                      occured_at: new Date(),
                    },
                  ],
                },
                { new: true }
              ).catch((err) => {
                console.log(
                  "!ERR: SERVICE\n service/movie/fn_service__movie__detail (!cond__is_same__date__recent_and_today)"
                );
                console.error(err);
                return null;
              });
              break;
            case 401 || 404:
              break;
            default:
              console.log("unknown code");
          }
        }

        return {
          code: 200,
          message: "success-service-movie-details",
          results: [
            updated_movie_detail__obj ? updated_movie_detail__obj : result__obj,
          ],
        };
      }

      /**
       * 본래 데이터 존재X
       */
      const res_data__obj = await fn_GET__tmdb__movie__id(_id);
      const { code, message, results } = res_data__obj;
      const movie_detail__obj = results[0];

      switch (code) {
        case 200:
          const detail__model_ins = new Detail(movie_detail__obj);
          detail__model_ins.save().catch((err) => {
            console.log(
              "!ERR: SERVICE\nLoc:service/movie (fn_service__movie__detail - model instance save)"
            );
            console.error(err);
          });

          break;
        case 401 || 404:
          console.log("401 or 404", message);
          break;
        default:
          console.log("unknown code");
      }

      return {
        code: code,
        message: "success-service-movie-details",
        results: code === 200 ? [movie_detail__obj] : null,
      };
    })
    .catch((err) => {
      console.log("!ERR\nLoc:service/movie/detail");
      console.error(err);
      return null;
    });
};
