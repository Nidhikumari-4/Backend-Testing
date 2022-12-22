const express = require("express");
const app = express();
const format = require("date-format");
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(201).send("Hello World!");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    userName: "Nidhi",
    followers: 1000,
    following: 100,
    posts: 100,
    date: format.asString("dd[MM]- hh:mm:ss.SSS", new Date()),
  };
  res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const fbSocial = {
    userName: "NidhiKumari2",
    followers: 2000,
    following: 200,
    posts: 200,
    date: format.asString("dd[MM]- hh:mm:ss.SSS", new Date()),
  };
  res.status(200).json(fbSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const LinkinSocial = {
    userName: "Nidhikumari3",
    followers: 3000,
    following: 300,
    posts: 300,
    date: format.asString("dd[MM]- hh:mm:ss.SSS", new Date()),
  };
  res.status(200).json(LinkinSocial);
});

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ params: req.params.token });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
