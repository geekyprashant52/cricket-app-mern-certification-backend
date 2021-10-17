const router = require("express").Router();
const playerDataModel = require("../models/playerDataModel.model");

router.route("/").get(async (req, res) => {
  try {
    const playerData = await playerDataModel.find();
    if (playerData != null) {
      res.send({ status: "Data found", data: playerData });
    } else {
      res.send({ status: "Data not found" });
    }
  } catch (err) {
    res.status(500).send({ status: "error", error: err });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const data = req.body;
    const savedData = new playerDataModel(data);
    let response = await savedData.save();
    res.send({ result: "Data inserted", data: response });
  } catch (err) {
    console.log(err);
    res.status(500).send({ result: "Error", data: err });
  }
});

router.route("/search").get(async (req, res) => {
  try {
    const teamName = req.body.from;
    const result = await playerDataModel.find({
      from: { $regex: teamName, $options: "i" },
    });
    res.send({ result: "Data found", data: result });
  } catch (err) {
    res.status(500).send({ result: "error occured", error: err });
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const id = req.params.id;
    const data = await playerDataModel.findById(id);
    res.send({ status: "Data found", data: data });
  } catch (err) {
    res.status(500).send({ status: "Error", error: err });
  }
});

module.exports = router;
