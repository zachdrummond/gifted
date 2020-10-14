var db = require("../models");

// Routes

module.exports = function (app) {

// USER ROUTES

  // route to add a new user
  app.post("/api/add/user", (req, res) => {
    db.User.create(req.body).then((newUser) => {
        res.json(newUser)
    });
  });
  // get all users
  app.get("/api/user", (req, res) =>{
    db.User.findAll().then((allUsers) =>{
      res.json(allUsers);
    });
  });
  // get user by email
  app.get("/api/user/:email", function(req, res) {
    db.User.findAll({
      where: {
        email: req.params.email,
      }
    }).then((user) => {
      res.json(user);
    });
  });

// GIFT ROUTES

  // route to add a new received gifts
  app.post("/api/add/received", (req, res) => {
    db.Received.create(req.body).then((newReceived) => {
        // if (err) throw err;
        res.json(newReceived)
    });
  });
  // route to add a new sent gifts
  app.post("/api/add/sent", (req, res) => {
    db.Sent.create(req.body).then((newSent) => {
        // if (err) throw err;
        res.json(newSent)
    });
  });
  // get all received gifts
  app.get("/api/received", (req, res) =>{
    db.Received.findAll().then((allReceived) =>{
        // if (err) throw err;
      res.json(allReceived);
    });
  });
  // get all sent gifts
  app.get("/api/sent", (req, res) =>{
    db.Sent.findAll().then((allSent) =>{
        // if (err) throw err;
      res.json(allSent);
    });
  });
};
