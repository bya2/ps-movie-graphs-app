import { ArrMovies } from "@/model/type";
import { req_ins__server } from "@/config/request/axios";
import {
  config__movies__now_playing,
  config__movies__latest,
  config__movies__upcoming,
  config__movies__popular,
} from "@/config/request/movies/axios";

/**
 * GET
 */
const fn_GET__movies = (_config: any): Promise<ArrMovies> => {
  return req_ins__server(_config).then((res) => {
    return res.data.results;
  });
};

export const fn_GET__movies__now_playing = (): Promise<ArrMovies> => {
  return fn_GET__movies({
    ...config__movies__now_playing,
    validateStatus(status: any): boolean {
      return status >= 200 && status <= 500;
    },
  }).catch((err) => {
    console.log("ERR:\nLOC:api/movies/fn_GET__movies__now_playing");
    console.error(err.message);
    if (err.response) {
      const { status, data, headers, message } = err.response;
      console.log(status);
    }
    return [];
  });
};

export const fn_GET__movies__latest = (): Promise<ArrMovies> => {
  return fn_GET__movies({
    ...config__movies__latest,
    validateStatus: function (status: any): boolean {
      return status >= 200 && status <= 500;
    },
  }).catch((err) => {
    console.log("ERR:\nLOC:api/movies/fn_GET__movies__latest");
    console.error(err.message);
    if (err.response) {
      const { status, data, headers, message } = err.response;
      console.log(status);
    }
    return [];
  });
};

export const fn_GET__movies__popular = (): Promise<ArrMovies> => {
  return fn_GET__movies({
    ...config__movies__popular,
    validateStatus: function (status: any): boolean {
      return status >= 200 && status <= 500;
    },
  }).catch((err) => {
    console.log("ERR:\nLOC:api/movies/fn_GET__movies__popular");
    console.error(err.message);
    if (err.response) {
      const { status, data, headers, message } = err.response;
      console.log(status);
    }
    return [];
  });
};

export const fn_GET__movies__upcoming = (): Promise<ArrMovies> => {
  return fn_GET__movies({
    ...config__movies__upcoming,
    validateStatus: function (status: any): boolean {
      return status >= 200 && status <= 500;
    },
  }).catch((err) => {
    console.log("ERR:\nLOC:api/movies/fn_GET__movies__upcoming");
    console.error(err.message);
    if (err.response) {
      const { status, data, headers, message } = err.response;
      console.log(status);
    }
    return [];
  });
};

/**
 * POST
 */

// code...
// search...
