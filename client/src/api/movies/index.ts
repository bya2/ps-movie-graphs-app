import { ArrMovies } from "@/model/type";
import { req_ins__server } from "@/config/request/axios";
import {
  endpoint__movies__now_playing,
  endpoint__movies__latest,
  endpoint__movies__popular,
  endpoint__movies__upcoming,
} from "@/config/request/movies/endpoint";

export const fn_GET__movies__now_playing = (): Promise<ArrMovies> => {
  console.log(22);
  return req_ins__server({
    method: "GET",
    url: endpoint__movies__now_playing,
    validateStatus: function (status) {
      return status >= 200 && status <= 500;
    },
  })
    .then((res) => {
      console.log(1);
      return res.data.results;
    })
    .catch((err) => {
      console.error("ERR:\nLOC:api/movies/fn_GET__movies__now_playing");
      if (err.response) {
        const { status, data, headers, message } = err.response;
        console.log(status);
        return data.results;
      }
      console.error(err.message);
      return null;
    });
};
