const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({}, { strict: false });

const teamModel = mongoose.model("cricketTeam", teamSchema);

module.exports = teamModel;
