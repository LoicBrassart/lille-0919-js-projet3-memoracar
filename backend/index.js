const { connection } = require("./conf");
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");

/* ------------------------------------------------------------ Tools */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

/* -------------------------------------------------------------- Public Routes */

app.use("/auth", require("./route/auth"));
app.use("/user", require("./route/user"));

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${port}`);
});
