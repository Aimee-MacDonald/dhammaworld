const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new Schema({
  title: {type: String, required: true},
  img: {type: String, required: false},
  date: {type: String, required: true},
  author: {type: String, required: true},
  description: {type: String, required: false}
});

module.exports = mongoose.model("Post", schema);
