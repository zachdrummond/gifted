var db = require("../models");

// Routes

module.exports = function (app) {
  // route to add a new user
  app.post("/api/add/user", (req, res) => {
    db.User.create(req.body).then((newUser) => {
        res.json(newUser)
    });
  });
};
