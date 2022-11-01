const express = require("express");
const app = express();
var setlistfmJs = require("setlistfm-js");
require("dotenv").config();

app.use(express.static("build"));

var setlistfmClient = new setlistfmJs({
  key: process.env.key, // Insert your personal key here
  format: "json", // "json" or "xml", defaults to "json"
  language: "en", // defaults to "en"
});

app.get("/api", (req, res) => {
  setlistfmClient
    .getArtistSetlists("f58384a4-2ad2-4f24-89c5-c7b74ae1cce7", {
      p: 1,
    })
    .then(
      (setlists) => {
        res.send(setlists);
      }
      // res.json({ users: ["userOne", "userTwo", "userThree"] });
    )
    .catch(function (error) {
      // Returns error
      console.log("error", error);
    });
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(5001, () => console.log("Server started on port 5001"));
