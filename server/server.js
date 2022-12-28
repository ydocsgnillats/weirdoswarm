const express = require("express");
const app = express();
var setlistfmJs = require("setlistfm-js");
require("dotenv").config();
const axios = require("axios");
const cheerio = require("cheerio");

const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("./serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

app.use(express.static("build"));

var setlistfmClient = new setlistfmJs({
  key: process.env.key,
  format: "json",
  language: "en",
});

app.get("/api/sets/:page", function (req, res) {
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

app.get("/api/sets", (req, res) => {
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

app.get("/api/search", (req, res) => {
  let sets = [];
  const getAllSets = async function (pageNum = 1) {
    let results = await setlistfmClient.getArtistSetlists(
      "f58384a4-2ad2-4f24-89c5-c7b74ae1cce7",
      {
        p: pageNum,
      }
    );
    console.log("getting results from", pageNum);
    try {
        if (results.total/results.page >= results.itemsPerPage) {
        sets.push(...results.setlist);
        await sleep(400);
        return await getAllSets(pageNum + 1);
      } else {
        await sleep(400)
        sets.push(...results.setlist);
        res.send(sets);
        console.info(results);
        console.log(results);
      }
    }
  catch(e){
    console.error(e);
  }
}

  getAllSets();
});

app.get("/api/songs", (req, res) => {
  const url = process.env.songSite;

  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const songsTable = $("tbody > tr");
      const songs = [];

      async function getSongs() {
        const snapshot = await db.collection("Albums").get();
        snapshot.forEach((doc) => {
          for (let key in doc.data()) {
            doc.data()[key].map((song) => {
              songs.push({
                songName: song,
                songCount: "0",
              });
            });
          }
        });

        songsTable.each(function () {
          const songName = $(this).find(".songName > span > .songName").text();
          // const songStats = $(this).find(".songName > span > a").children;

          const songCount = $(this).find(".songCount > span > span").text();

          if (songName !== "" && songCount !== "") {
            songs.map((s) => {
              if (
                s.songName.replace(/[^0-9a-z]/gi, "") ===
                songName.replace(/[^0-9a-z]/gi, "")
              ) {
                s.songCount = songCount;
                // console.log(songStats);
              }
            });
          }
        });
        songs.sort((a, b) => parseInt(b.songCount) - parseInt(a.songCount));

        res.json(songs);
      }
      getSongs();
    })
    .catch(console.error);
});

app.get("/api/meetups", (req, res) => {
  let meetups = [];
  async function getMeetups() {
    const snapshot = await db.collection("Meetups").get();
    snapshot.forEach((doc) => {
      meetups.push(doc.data());
    });
    res.json(meetups);
  }
  getMeetups();
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(5001, () => console.log("Server started on port 5001"));
