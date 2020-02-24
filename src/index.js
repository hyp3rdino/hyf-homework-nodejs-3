const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Hello World!");
});

const users = [];

app.get("/users", (req, res) => {
  res.json(
  users
  );
});

app.listen(3000, () => console.log("server startetd on 3000"));
