const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

require("./models/Skills");
require("./models/Users");
require("./models/Questions");
require("./services/passport"); // pass passport for configuration

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://dchenam:0514dc@ds014388.mlab.com:14388/dchenam-hackust"
);

const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/testRoutes")(app);

app.get("/", (req, res) => {
  res.send("HOME");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("listening on ", PORT);
