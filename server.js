import config from "./config";
import apiRouter from "./api/index";

import express from "express";
const server = express();

server.set("view engine", "ejs");

import "./serverRender";

server.get("/", (req, res) => {
  res.render("index", {
    content: "Hello Express and <em>EJS!</em>",
  });
});

server.use("/api", apiRouter);
server.use(express.static("public"));

server.listen(config.port, config.host, () => {
  console.info("Express listening on port ", config.port);
});
