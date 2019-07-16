const express = require("express");
const helmet = require("helmet");

const carsRoute = require("./cars/carRoute");

const server = express();
server.use(express.json());

server.use(logger, helmet());
server.use("/api/cars", carsRoute);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.all("*", (req, res) => {
  res.status(404).json("Sorry No Such Location");
});
//custom middleware

function logger(req, res, next) {
  console.log(req.method, req.url, Date.now());
  next();
}

module.exports = server;
