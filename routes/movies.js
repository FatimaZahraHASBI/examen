var express = require("express");
var router = express.Router();

var moviesJSON = require("../movies_reduit.json");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(moviesJSON);
});

module.exports = router;
