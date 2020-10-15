const db = require("../models");

// Routes

module.exports = function (app) {
  // Each of the below routes just handles the HTML pages

  // index route loads login page
  app.get("/", function (req, res) {
    res.render("login");
  });
  // signup route loads signup page
  app.get("/signup", function (req, res) {
    res.render("signup");
  });
  // index route loads login page
  app.get("/logout", function (req, res) {
    res.render("login");
  });
  // index route loads received gifts page
  app.get("/received", function (req, res) {
    db.ReceivedGifts.findAll()
      .then((allReceivedGifts) => {
        // if (err) throw err;
        console.log(allReceivedGifts);
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
  // index route loads sent gifts page
  app.get("/sent", function (req, res) {
    db.SentGifts.findAll()
      .then((allSentGifts) => {
        // if (err) throw err;
        res.json(allSentGifts);
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
  // index route loads add received gifts page
  app.get("/add/received", function (req, res) {
    res.render("addReceived");
  });
  // index route loads add sent gifts page
  app.get("/add/sent", function (req, res) {
    res.render("addSent");
  });
};
