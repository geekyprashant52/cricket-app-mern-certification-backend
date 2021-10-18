const router = require("express").Router();
const teamModel = require("../models/teamModel.model");

const teamCardsData = [
  {
    fullName: "Royal Challengers Bangalore",
    key: "RCB",
    championshipsWon: 3,
    teamIcon:
      "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RCB-png-logo-2020.png?quality=100&f=auto",
    playerCount: 11,
    topBatsMan: "Virat Kohli",
    topBowler: "Adam Zampa",
  },
  {
    fullName: "Mumbai Indians",
    key: "MI",
    championshipsWon: 5,
    teamIcon:
      "https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
    playerCount: 11,
    topBatsMan: "Rohit Sharma",
    topBowler: "Jasprit Bumrah",
  },
  {
    fullName: "Rajasthan Royals",
    key: "RR",
    championshipsWon: 6,
    teamIcon:
      "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RR-Logo.png?quality=100&f=auto",
    playerCount: 11,
    topBatsMan: "Sanju Samson",
    topBowler: "Jaydev Unadkat",
  },
  {
    fullName: "Delhi Capitals",
    key: "DC",
    championshipsWon: 8,
    teamIcon:
      "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
    playerCount: 11,
    topBatsMan: "Rishabh Pant",
    topBowler: "Amit Mishra",
  },
  {
    fullName: "Chennai Super Kings",
    key: "CSK",
    championshipsWon: 3,
    teamIcon:
      "https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
    playerCount: 11,
    topBatsMan: "MS Dhoni",
    topBowler: "Deepak Chahar",
  },
];

router.route("/").get(async (req, res) => {
  try {
    const data = await teamModel.find();
    res.send({ status: "data found", data: data });
  } catch (err) {
    res.status(500).send({ status: "error", error: err });
  }
});
router.route("/:id").get(async (req, res) => {
  try {
    const data = await teamModel.findById(req.params.id);
    res.send({ status: "data found", data: data });
  } catch (err) {
    res.status(500).send({ status: "error", error: err });
  }
});

router.route("/save").post(async (req, res) => {
  try {
    teamCardsData.map(async (item) => {
      const data = item;
      const savedData = new teamModel(data);
      let response = await savedData.save();
      res.send({ result: "Data inserted", data: response });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ result: "Error", data: err });
  }
});

module.exports = router;
