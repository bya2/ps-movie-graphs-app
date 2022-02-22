const axios = require("axios");

const fn_logic__GET__now_playing = async (_page) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=ko-KR&region=KR&page=${_page}`
    )
    .catch((err) => {
      console.log("logic/api/themoviedb/now_playing");
      console.error(err.message);
      return null;
    });
};

const fn_logic__GET__upcoming = async (_page) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=ko-KR&region=KR&page=${_page}`
    )
    .catch((err) => {
      console.log("logic/api/themoviedb/upcoming");
      console.error(err);
      return null;
    });
};

const fn_logic__GET__latest = async (_page) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.API_KEY}&language=ko-KR&region=KR&page=${_page}`
    )
    .catch((err) => {
      console.log("logic/api/themoviedb/latest");
      console.error(err);
      return null;
    });
};

const fn_logic__GET__popular = async (_page) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=ko-KR&region=KR&page=${_page}`
    )
    .catch((err) => {
      console.log("logic/api/themoviedb/popular");
      console.error(err);
      return null;
    });
};

exports.fn_logic__GET__now_playing = fn_logic__GET__now_playing;
