const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

const mongoURI = process.env.ATLAS_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongoConnection = mongoose.connection;
mongoConnection.once("open", () => {
  console.log("MongoDB Connected");
});

const playerDataRouter = require("./routers/playerDataRouter");
app.use("/playerdata", playerDataRouter);

const teamDataRouter = require("./routers/teamDataRouter");
app.use("/teamdata", teamDataRouter);

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.listen(port, () => {
  console.log("Server is listening to " + port);
});
