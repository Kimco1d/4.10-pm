const express = require("express");

const app = express();

const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/abc", (req, res) => {
  res.send("ABC Request");
});

app.post("/", (req, res) => {
  res.send("Hello, post!");
});

app.put("/", (req, res) => {
  res.send("Hello, post!");
});

app.delete("/", (req, res) => {
  res.send("Hello, post!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
