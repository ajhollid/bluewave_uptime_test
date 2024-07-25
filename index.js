const express = require("express");
const app = express();
const http = require("http");

app.get("/random", (req, res) => {
  const statusCodes = Object.keys(http.STATUS_CODES).map(Number);
  const randomIndex = Math.floor(Math.random() * statusCodes.length);
  const randomStatusCode = statusCodes[randomIndex];
  res
    .status(randomStatusCode)
    .json({ status: http.STATUS_CODES[randomStatusCode] });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
