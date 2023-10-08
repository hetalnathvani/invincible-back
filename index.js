const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello There !!!!");
});

app.listen(3000, () => {
  console.log("Server started on port no 3000");
});
