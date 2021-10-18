const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  playerName: { type: String },
  from: { type: String },
  price: { type: String },
  isPlaying: { type: Boolean },
  description: { type: String },
  sessionId: { type: Number },
  playerImage: { type: String },
});

const playerModel = mongoose.model("cricketPlayerData", playerSchema);

module.exports = playerModel;
