const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leagueSchema = new Schema({
  name: String,
  imgPath: String,
  mainEvent : String,
});

const Leagues = mongoose.model("League", leagueSchema);

module.exports = Leagues;
