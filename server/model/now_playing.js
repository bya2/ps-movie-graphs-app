const mongoose = require("mongoose");

const model_name__str = "NowPlaying";

module.exports = (function () {
  const modelScheme = new mongoose.Schema({
    id: {
      type: Number,
      required: true,
    },
  });
  const Model = mongoose.model(model_name__str, modelScheme);
  return Model;
})();
