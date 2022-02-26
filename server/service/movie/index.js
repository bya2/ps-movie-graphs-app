const { fn_GET__tmdb__movie__id } = require("../../logic/api/themoviedb");
const { baseURL__img_tmdb } = require("../../config/themoviedb/baseURL");
const { endpoint__img_tmdb } = require("../../config/themoviedb/endpoint");
const {
  fn_val__today__str,
  fn_val__date__str,
} = require("../../logic/date/today");

const Detail = require("../../model/details");

exports.fn_service__movie__detail = async (_id) => {
  const movie_detail__obj = await await Detail.findOne({ id: _id })
    .exec()
    .then(async (_result__obj) => {
      const today__str = fn_val__today__str();

      const cond__is_result = _result__obj && true;

      /**
       * 원래 데이터 O
       */
      if (cond__is_result) {
        let updated_movie_detail__obj;

        const graph_dots__arr = _result__obj.graph;
        const graph_last_dot__obj = graph_dots__arr[graph_dots__arr.length - 1];
        const last_date__str = fn_val__date__str(
          graph_last_dot__obj.occured_at
        );
        const cond__is_same__last_and_today = last_date__str === today__str;

        // 요청한 마지막 날짜가 오늘과 같지 않음
        if (!cond__is_same__last_and_today) {
          const res_data__obj = await fn_GET__tmdb__movie__id(_id);
          const { code, message, results } = res_data__obj;
          const movie_detail__obj = results[0];

          switch (code) {
            case 200:
              updated_movie_detail__obj = await Detail.findOneAndUpdate(
                { id: _id },
                {
                  graph: [
                    ...graph_dots__arr,
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

        return updated_movie_detail__obj
          ? updated_movie_detail__obj
          : _result__obj;
      }

      /**
       * 원래 데이터 X
       */
      const res_data__obj = await fn_GET__tmdb__movie__id(_id);
      const { code, message, results } = res_data__obj;
      const movie_detail__obj = {
        ...results[0],
        poster_path: `${baseURL__img_tmdb}${endpoint__img_tmdb(
          results[0].poster_path
        )}`,
        backdrop_path: `${baseURL__img_tmdb}${endpoint__img_tmdb(
          results[0].backdrop_path
        )}`,
        graph: [{ popularity: results[0].popularity, occured_at: new Date() }],
      };

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

      return [movie_detail__obj];
    })
    .catch((err) => {
      console.log("!ERR\nLoc:service/movie/detail");
      console.error(err);
      return null;
    });

  return movie_detail__obj;
};
