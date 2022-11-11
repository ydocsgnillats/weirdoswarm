const express = require("express");
const app = express();
var setlistfmJs = require("setlistfm-js");
require("dotenv").config();
const axios = require("axios");
const cheerio = require("cheerio");

app.use(express.static("build"));

var setlistfmClient = new setlistfmJs({
  key: process.env.key, // Insert your personal key here
  format: "json", // "json" or "xml", defaults to "json"
  language: "en", // defaults to "en"
});

app.get("/api/:page", function (req, res) {
  setlistfmClient
    .getArtistSetlists("f58384a4-2ad2-4f24-89c5-c7b74ae1cce7", {
      p: req.params["page"],
    })
    .then((setlists) => {
      res.send(setlists);
    })
    .catch(function (error) {
      console.log("error", error);
    });
});

app.get("/api", (req, res) => {
  setlistfmClient
    .getArtistSetlists("f58384a4-2ad2-4f24-89c5-c7b74ae1cce7", {
      p: 1,
    })
    .then((setlists) => {
      res.send(setlists);
    })
    .catch(function (error) {
      console.log("error", error);
    });
});

app.get("/songs", (req, res) => {
  const url = process.env.songSite;

  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const songsTable = $("tbody > tr");
      const songs = [];
      songsTable.each(function () {
        const songName = $(this).find(".songName > span > .songName").text();
        const songCount = $(this).find(".songCount > span > span").text();

        if (songName !== "" && songCount !== "") {
          songs.push({
            songName,
            songCount,
          });
        }
      });

      res.json(songs);
    })
    .catch(console.error);
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(5001, () => console.log("Server started on port 5001"));
