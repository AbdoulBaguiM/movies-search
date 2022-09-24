require("dotenv").config();
const express = require("express");
const client = require("./elasticsearch/client");
const moviesRouter = require("./data/movie_api");

const app = express();

app.use("/movies", moviesRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
