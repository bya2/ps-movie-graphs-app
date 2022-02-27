const NowPlaying = require("../../model/now_playing");

const {
  fn_GET__tmdb__movies__now_playing,
  fn_GET__tmdb__movies__upcoming,
  fn_GET__tmdb__movies__latest,
  fn_GET__tmdb__movies__popular,
  fn_GET__tmdb__movies__top_rated,
} = require("../../logic/api/themoviedb");

exports.fn_service__movies__now_playing = async () => {
  const pages__num = 1;
  const pages__arr = Array(pages__num)
    .fill(0)
    .reduce((arr, num, i) => [...arr, i + 1], []);

  const movies__all_pages__nArr = await Promise.all(
    pages__arr.map(async (_page) => {
      const movies__arr = await fn_GET__tmdb__movies__now_playing(_page);
      return movies__arr.reduce(
        (arr, movie__obj) => [...arr, { id: movie__obj.id }],
        []
      );
    })
  );

  const movies__all_pages__arr = movies__all_pages__nArr.reduce(
    (arr, movies__arr) => [...arr, ...movies__arr],
    []
  );

  return movies__all_pages__arr;
};

exports.fn_service__movies__upcoming = async () => {
  const pages__num = 1;
  const pages__arr = Array(pages__num)
    .fill(0)
    .reduce((arr, num, i) => [...arr, i + 1], []);

  const movies__all_pages__nArr = await Promise.all(
    pages__arr.map(async (_page) => {
      const movies__arr = await fn_GET__tmdb__movies__upcoming(_page);
      return movies__arr.reduce(
        (arr, movie__obj) => [...arr, { id: movie__obj.id }],
        []
      );
    })
  );

  const movies__all_pages__arr = movies__all_pages__nArr.reduce(
    (arr, movies__arr) => [...arr, ...movies__arr],
    []
  );

  return movies__all_pages__arr;
};

exports.fn_service__movies__top_rated = async () => {
  const pages__num = 1;
  const pages__arr = Array(pages__num)
    .fill(0)
    .reduce((arr, num, i) => [...arr, i + 1], []);

  const movies__all_pages__nArr = await Promise.all(
    pages__arr.map(async (_page) => {
      const movies__arr = await fn_GET__tmdb__movies__top_rated(_page);

      return movies__arr.reduce(
        (arr, movie__obj) => [...arr, { id: movie__obj.id }],
        []
      );
    })
  );

  const movies__all_pages__arr = movies__all_pages__nArr.reduce(
    (arr, movies__arr) => [...arr, ...movies__arr],
    []
  );

  return movies__all_pages__arr;
};

exports.fn_service__movies__popular = async () => {
  const pages__num = 1;
  const pages__arr = Array(pages__num)
    .fill(0)
    .reduce((arr, num, i) => [...arr, i + 1], []);

  const movies__all_pages__nArr = await Promise.all(
    pages__arr.map(async (_page) => {
      const movies__arr = await fn_GET__tmdb__movies__popular(_page);
      return movies__arr.reduce(
        (arr, movie__obj) => [...arr, { id: movie__obj.id }],
        []
      );
    })
  );

  const movies__all_pages__arr = movies__all_pages__nArr.reduce(
    (arr, movies__arr) => [...arr, ...movies__arr],
    []
  );

  return movies__all_pages__arr;
};

exports.fn_service__movies__latest = async () => {
  const pages__num = 1;
  const pages__arr = Array(pages__num)
    .fill(0)
    .reduce((arr, num, i) => [...arr, i + 1], []);

  console.log(1111);

  const movies__all_pages__nArr = await Promise.all(
    pages__arr.map(async (_page) => {
      console.log(2222);

      const movies__arr = await fn_GET__tmdb__movies__latest(_page);

      console.log(movies__arr);
      return movies__arr.reduce(
        (arr, movie__obj) => [...arr, { id: movie__obj.id }],
        []
      );
    })
  );

  console.log(3333);

  const movies__all_pages__arr = movies__all_pages__nArr.reduce(
    (arr, movies__arr) => [...arr, ...movies__arr],
    []
  );

  console.log(4444);

  return movies__all_pages__arr;
};
