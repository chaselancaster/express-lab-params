const express = require("express");

const app = express();

app.get("/greeting/", (req, res) => {
  res.send("Hello, stranger");
});

app.listen(3000, () => {
  console.log("Server is listening on Port 3000");
});
