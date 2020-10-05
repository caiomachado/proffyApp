const express = require("express");
const server = express();

const {
  pageLanding,
  pageStudy,
  pageTeachClasses,
  saveClasses,
} = require("./pages");

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/teach-classes", pageTeachClasses)
  .post("/save-classes", saveClasses)
  .listen(5500);
