// DEPENDENCIES
const express = require("express");
const exphbs = require("express-handlebars");

const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access");

const db = require("./models");

const app = express();

// PORT
const PORT = process.env.PORT || 8080;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",

    handlebars: allowInsecurePrototypeAccess(handlebars),

  })
);
app.set("view engine", "handlebars");
// app.use(controller);

// Routes
//
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// db.sequelize.sync({ force: true }).then(function () {
db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
