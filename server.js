// DEPENDENCIES
const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
// const {
//   allowInsecurePrototypeAccess
// } = require("@handlebars/allow-prototype-access");
const db = require("./models");
const controller = require("./controllers/controller.js");

const app = express();

// PORT
const PORT = process.env.PORT || 8080;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    // handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");
app.use(controller);

// db.sequelize.sync({ force: true }).then(function () {
db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});

// ROUTES
// app.get("/", (request, response) => {
//   response.render("index");
// });

app.get("/api/config", (request, response) => {
  response.json({ success: true });
});

app.post("/api/add/user", (req, res) => {
  db.User.create(req.body).then((newUser) => {
    res.json(newUser);
  });
});