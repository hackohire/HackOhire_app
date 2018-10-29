var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({   
  companies: String,
  projects: String,
  positions: String,
  two_years_goal: String,
  five_years_goal: String

});

var Post1 = mongoose.model("Post1", PostSchema);
module.exports = Post1;