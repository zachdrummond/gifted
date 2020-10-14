var db = require("../models");

// Routes

module.exports = function (app) {
  // USER ROUTES

  // route to add a new user
  app.post("/api/add/user", (req, res) => {
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

  // route to add a new received gifts
  app.post("/api/add/received", (req, res) => {
    db.Received.create(req.body).then((newReceived) => {
      // if (err) throw err;
      res.json(newReceived);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to add new received gift.",
        });
      });
  });
  // route to add a new sent gifts
  app.post("/api/add/sent", (req, res) => {
    db.Sent.create(req.body).then((newSent) => {
      // if (err) throw err;
      res.json(newSent);
    }).catch((err) => {
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
    db.Received.findAll().then((allReceived) => {
      // if (err) throw err;
      res.json(allReceived);
    }).catch((err) => {
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
    db.Sent.findAll().then((allSent) => {
      // if (err) throw err;
      res.json(allSent);
    }).catch((err) => {
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
    db.Received.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((received) => {
      res.json(received);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to edit received gifts.",
        });
      });
  });
  // PUT route for updating sent gifts
  app.put("/api/edit/sent", (req, res) => {
    db.Sent.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((sent) => {
      res.json(sent);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to edit sent gifts.",
        });
      });
  });
  // DELETE route for deleting received gifts
  app.delete("/api/received/:id", function (req, res) {
    db.Received.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (deleted) {
      res.json(deleted);
    });
  });
  // DELETE route for deleting sent gifts
  app.delete("/api/sent/:id", function (req, res) {
    db.Sent.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (deleted) {
      res.json(deleted);
    });
  });
};
