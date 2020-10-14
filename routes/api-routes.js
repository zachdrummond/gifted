var db = require("../models");

// Routes

module.exports = function (app) {
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

};
