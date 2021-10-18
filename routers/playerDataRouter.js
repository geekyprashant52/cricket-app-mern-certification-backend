const router = require("express").Router();
const playerDataModel = require("../models/playerDataModel.model");
const teamModel = require("../models/teamModel.model");

let playerDataArr = [
  {
    id: 1,
    playerName: "Rohit Sharma",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Batsman",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/107.png",
  },

  {
    id: 12,
    playerName: "MS Dhoni",
    from: "CSK",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Wicketkeeper batsman",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/1.png",
  },

  {
    id: 39,
    playerName: "Virat Kohli",
    from: "RCB",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "Batsman",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RCB-png-logo-2020.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/164.png",
  },
  {
    id: 34,
    playerName: "Sanju Samson",
    from: "RR",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Wicketkeeper batsman",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RR-Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/258.png",
  },

  {
    id: 23,
    playerName: "Rishabh Pant",
    from: "DC",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Wicketkeeper-batsman",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/2972.png",
  },
  {
    id: 2,
    playerName: "Aditya Tare",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "Wicketkeeper batsman",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/99.png",
  },
  {
    id: 3,
    playerName: "Chris Lynn",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Batsman",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/179.png",
  },
  {
    id: 4,
    playerName: "Hardik Pandya",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "All-rounder",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/2740.png",
  },
  {
    id: 5,
    playerName: "Arjun Tendulkar",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "All-rounder",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/10244.png",
  },
  {
    id: 6,
    playerName: "Jasprit Bumrah",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Bowler",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/1124.png",
  },
  {
    id: 7,
    playerName: "Macro Jamsen",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "All-rounder",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/17068.png",
  },
  {
    id: 8,
    playerName: "Ishan Kishan",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Batsman",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/2975.png",
  },
  {
    id: 9,
    playerName: "Kieron Pollard",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "All-rounder",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/210.png",
  },
  {
    id: 10,
    playerName: "Trent Boult",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Bowler",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/969.png",
  },
  {
    id: 11,
    playerName: "Jimmy Neesham",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "All-rounder",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/971.png",
  },

  {
    id: 13,
    playerName: "Ambati Rayudu",
    from: "CSK",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "Wicketkeeper batsman",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/100.png",
  },
  {
    id: 14,
    playerName: "KM Asif",
    from: "CSK",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "All-rounder",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/4944.png",
  },
  {
    id: 15,
    playerName: "Dwanye Bravo",
    from: "CSK",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "All-rounder",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/25.png",
  },
  {
    id: 16,
    playerName: "Deepak Chahar",
    from: "CSK",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Bowler",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/140.png",
  },
  {
    id: 17,
    playerName: "Faf du Plessis",
    from: "CSK",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "Batsman",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/24.png",
  },
  {
    id: 18,
    playerName: "Imran Tahir",
    from: "CSK",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Bowler",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/898.png",
  },
  {
    id: 19,
    playerName: "Narayan Jagadeesan",
    from: "CSK",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Wicketkeeper batsman",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/4942.png",
  },
  {
    id: 20,
    playerName: "Ravindra Jadeja",
    from: "CSK",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "All-rounder",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/9.png",
  },
  {
    id: 21,
    playerName: "Sam Curran",
    from: "CSK",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "All-rounder",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/2939.png",
  },
  {
    id: 22,
    playerName: "Suresh Raina",
    from: "CSK",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Batsman",
    logo: "https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
    photo: "https://static.iplt20.com/players/284/14.png",
  },

  {
    id: 24,
    playerName: "Ajinkya Rahane",
    from: "DC",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "Batsman",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/135.png",
  },
  {
    id: 25,
    playerName: "Amit Mishra",
    from: "DC",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Bowler",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/30.png",
  },
  {
    id: 26,
    playerName: "Anrich Nortje",
    from: "DC",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "Bowler",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/5433.png",
  },
  {
    id: 27,
    playerName: "Avesh Khan",
    from: "DC",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Bowler",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/1561.png",
  },
  {
    id: 28,
    playerName: "Axar Patel",
    from: "DC",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "All-rounder",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/1113.png",
  },
  {
    id: 29,
    playerName: "Chris Woakes",
    from: "DC",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "All-rounder",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/967.png",
  },
  {
    id: 30,
    playerName: "Ishant Sharma",
    from: "DC",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "Bowler",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/38.png",
  },
  {
    id: 31,
    playerName: "Kagiso Rabada",
    from: "DC",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Bowler",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/1664.png",
  },
  {
    id: 32,
    playerName: "Lalit Yadav",
    from: "DC",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "All-rounder",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/6870.png",
  },
  {
    id: 33,
    playerName: "Shikhar Dhawan",
    from: "DC",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Batsman",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/41.png",
  },

  {
    id: 35,
    playerName: "Andrew Tye",
    from: "RR",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Bowler",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RR-Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/1480.png",
  },
  {
    id: 36,
    playerName: "Anuj Rawat",
    from: "RR",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "Wicketkeeper batsman",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RR-Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/10788.png",
  },
  {
    id: 37,
    playerName: "Ben Stokes",
    from: "RR",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "All-rounder",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RR-Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/1154.png",
  },
  {
    id: 38,
    playerName: "David Miller",
    from: "RR",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Batsman",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RR-Logo.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/187.png",
  },

  {
    id: 40,
    playerName: "AB de Villiers",
    from: "RCB",
    price: "6.50 Cr",
    isPlaying: false,
    championshipsWon: 3,
    description: "Wicketkeeper batsman",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RCB-png-logo-2020.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/233.png",
  },
  {
    id: 41,
    playerName: "Adam Zampa",
    from: "RCB",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Bowler",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RCB-png-logo-2020.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/958.png",
  },
  {
    id: 42,
    playerName: "Devdutt Padikkal",
    from: "RCB",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Batsman",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RCB-png-logo-2020.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/5430.png",
  },
  {
    id: 43,
    playerName: "Kane Richardson",
    from: "RCB",
    price: "6.50 Cr",
    isPlaying: true,
    championshipsWon: 3,
    description: "Bowler",
    logo: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RCB-png-logo-2020.png?quality=100&f=auto",
    photo: "https://static.iplt20.com/players/284/798.png",
  },
];

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

router.route("/search/:from").get(async (req, res) => {
  try {
    const teamName = req.params.from;
    const result = await playerDataModel.find({
      from: { $regex: teamName, $options: "i" },
    });
    res.send({ result: "Data found", data: result });
  } catch (err) {
    res.status(500).send({ result: "error occured", error: err });
  }
});
router.route("/team/:name").get(async (req, res) => {
  try {
    const teamName = req.params.name;
    const result = await playerDataModel.find({
      from: teamName.toString().toUpperCase(),
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

router.route("/save").post((req, res) => {
  playerDataArr.map(async (item) => {
    const { playerName, from, price, isPlaying, description, photo } = item;
    const session = Math.floor(Math.random() * 1000000 + 1);
    const dataObj = {
      playerName: playerName,
      from: from,
      price: price,
      isPlaying: isPlaying,
      description: description,
      sessionId: session,
      playerImage: photo,
    };
    try {
      const savedData = new playerDataModel(dataObj);
      let response = await savedData.save();
      res.send({ result: "Data inserted", data: response });
    } catch (err) {
      console.log(err);
      res.status(500).send({ result: "Error", data: err });
    }
  });
});

module.exports = router;
