const axios = require("axios");
const { baseURL__img_tmdb, baseURL__tmdb } = require("../themoviedb/baseURL");

const req_timeout = 1000 * 3;

const config__axios_ins__tmdb = {
  baseURL: baseURL__tmdb,
  timeout: req_timeout,
};

const config__axios_ins__img_tmdb = {
  baseURL: baseURL__img_tmdb,
  timeout: req_timeout,
};

exports.axios_ins__tmdb = axios.create(config__axios_ins__tmdb);
exports.axios_ins__img_tmdb = axios.create(config__axios_ins__img_tmdb);
