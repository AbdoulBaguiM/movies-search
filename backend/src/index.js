require("dotenv").config();
const express = require("express");
const client = require("./elasticsearch/client");

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
