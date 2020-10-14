const path = require("path");

// Routes

module.exports = function (app) {
  // Each of the below routes just handles the HTML pages

  // index route loads login page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/login.handlebars"));
  });
  // signup route loads signup page
  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/signup.handlebars"));
  });
  // index route loads login page
  app.get("/logout", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/login.handlebars"));
  });
  // index route loads received gifts page
  app.get("/received", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/receivedGifts.handlebars"));
  });
  // index route loads sent gifts page
  app.get("/sent", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/sentGifts.handlebars"));
  });
  // index route loads add received gifts page
  app.get("/add/received", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/addReceived.handlebars"));
  });
  // index route loads add sent gifts page
  app.get("/add/sent", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/addSent.handlebars"));
  });
};
