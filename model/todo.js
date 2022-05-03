const mongoose = require("mongoose");

const todoSChemaModel = mongoose.Schema({
  text: { type: String, required: true },
  isDone: { type: Boolean, required: true },
});

module.exports = mongoose.model("todo", todoSChemaModel);
