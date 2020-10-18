const { sequelize } = require("../models");
const db = require("../models");

// Routes

module.exports = function (app) {
  // USER ROUTES
  //=========================================================

  // route to add a new user
  app.post("/api/add/user", (req, res) => {
    console.log(req.body);
    db.User.create(req.body)
      .then((newUser) => {
        res.json(newUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to create new user.",
        });
      });
  });
  // get all users
  app.get("/api/user", (req, res) => {
    db.User.findAll()
      .then((allUsers) => {
        res.json(allUsers);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to get all users.",
        });
      });
  });
  // get user by email
  app.get("/api/user/:email", function (req, res) {
    db.User.findAll({
      where: {
        email: req.params.email,
      },
    })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to get user by email.",
        });
      });
  });

  // GIFT ROUTES
  //=========================================================

  // route to add a new received gift
  app.post("/api/add/received", (req, res) => {
    db.ReceivedGifts.create(req.body)
      .then((newReceivedGift) => {
        // if (err) throw err;
        res.json(newReceivedGift);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to add new received gift.",
        });
      });
  });
  // route to add a new sent gift
  app.post("/api/add/sent", (req, res) => {
    db.SentGifts.create(req.body)
      .then((newSentGift) => {
        // if (err) throw err;
        res.json(newSentGift);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to add new sent gift.",
        });
      });
  });

  // get all received gifts
  app.get("/api/received", (req, res) => {
    // console.log(res.body.giftReceived)
    db.ReceivedGifts.findAll()
      .then((allReceivedGifts) => {
        res.render("receivedGifts", { gifts: allReceivedGifts });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to get received gifts.",
        });
      });
  });
  // get all sent gifts
  app.get("/api/sent", (req, res) => {
    db.SentGifts.findAll()
      .then((allSentGifts) => {
        // res.json(allSentGifts);
        res.render("sentGifts", {gifts: allSentGifts});
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to get sent gifts.",
        });
      });
  });

  // get one sent gifts
  app.get("/api/sent/:id", (req, res) => {
    db.SentGifts.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((sentGift) => {
        // res.json(allSentGifts);
        console.log(sentGift)
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to get sent gifts.",
        });
      });
  });
  // PUT route for updating received gifts
  app.put("/api/edit/received", (req, res) => {
    console.log(req.body)
    db.ReceivedGifts.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
      .then((receivedGift) => {
        res.json(receivedGift);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to edit received gift.",
        });
      });
  });
  // PUT route for updating sent gifts
  app.put("/api/edit/sent", (req, res) => {
    db.SentGifts.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
      .then((sentGifts) => {
        res.json(sentGifts);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to edit sent gift.",
        });
      });
  });
  // DELETE route for deleting received gifts
  app.delete("/api/received/:id", function (req, res) {
    db.ReceivedGifts.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(function (deletedReceivedGift) {
        res.json(deletedReceivedGift);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to delete received gift.",
        });
      });
  });
  // DELETE route for deleting sent gifts
  app.delete("/api/sent/:id", function (req, res) {
    db.SentGifts.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(function (deletedSentGift) {
        res.json(deletedSentGift);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to delete sent gift.",
        });
      });
  });
};
