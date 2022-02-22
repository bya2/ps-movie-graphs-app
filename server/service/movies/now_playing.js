const { fn_logic__GET__now_playing } = require("../../logic/api/themoviedb");

const fn_service__GET__now_playing = async () => {
  let all_pages_results__arr = [];

  for (let i = 1; i; ++i) {
    const res = await fn_logic__GET__now_playing();

    if (
      res.status === 200 ||
      res instanceof Array ||
      res.results.length !== 0
    ) {
      const results__arr = res.results;
      all_pages_results__arr = [...all_pages_results__arr, results__arr];
    } else {
      break;
    }
  }

  return all_pages_results__arr;
};

module.exports = fn_service__GET__now_playing;
