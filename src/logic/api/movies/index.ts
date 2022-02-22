import { api__server as api } from "../axios";
import { endpoint__GET__movies__now_playing } from "../../../config/api/movies/endpoint";
import {
  err_msg__GET__movies__now_playing,
  msg__GET__movies__now_playing,
} from "../../../config/api/movies/message";
import { ArrMovies } from "../../../model/type";
/**
 * GET
 */
export const fn_logic__GET__movies__now_playing =
  async (): Promise<ArrMovies> => {
    return api
      .get(endpoint__GET__movies__now_playing)
      .then((res) => {
        console.log(msg__GET__movies__now_playing);

        const { status, data } = res;
        const { results } = data;

        switch (status) {
          case 200:
            break;
          default:
            break;
        }

        return results;
      })
      .catch((err) => {
        console.log(err_msg__GET__movies__now_playing);
        console.error(err);
        return ["b", "c"];
      });
  };
