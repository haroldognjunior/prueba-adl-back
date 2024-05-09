var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Estás viendo la respuesta de usuarios");
});

module.exports = router;
