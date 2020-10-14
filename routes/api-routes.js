var db = require("../models");

// Routes

module.exports = function (app) {
  // route to add a new user
  app.post("/api/add/user", (req, res) => {
    db.User.create(req.body).then((newUser) => {
        console.log(newUser)
        res.json(newUser)
    //   if (err) {
    //     res.json({
    //       error: true,
    //       data: null,
    //       message: "Unable to create new thing.",
    //     });
    //   } else {
    //     res.json({
    //       error: false,
    //       data: newUser,
    //       message: "New user created.",
    //     });
    //   }
    });
  });
};
