const mongoose = require("mongoose");

const model_name__str = "Detail";

// 제외: 컬렉션, 회사, 나라, imdb_id, runtime, video,
module.exports = (function () {
  const modelScheme = new mongoose.Schema({
    graph: [
      {
        popularity: {
          type: Number,
          required: true,
        },
        occured_at: {
          type: Date,
          required: true,
        },
      },
    ],
    adult: {
      type: Boolean,
      required: true,
    },
    backdrop_path: String, // null
    budget: Number,
    genres: [
      {
        id: Number,
        name: String,
      },
    ],
    homepage: String,
    id: {
      type: Number,
      required: true,
    },
    origin_language: String,
    origin_title: String,
    overview: String, // null
    popularity: {
      type: Number,
      required: true,
    },
    poster_path: String, // null
    release_date: {
      type: Date,
      required: true,
    },
    revenue: Number,
    spoken_language: [
      {
        english_name: String,
        iso_639_1: String,
        name: String,
      },
    ],
    stauts: String,
    tagline: String,
    title: {
      type: String,
      required: true,
    },
    vote_average: {
      type: Number,
      required: true,
    },
    vote_count: {
      type: Number,
      required: true,
    },
  });
  const Model = mongoose.model(model_name__str, modelScheme);
  return Model;
})();
