const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { message: "みなさんこんにちは！" });
});

router.get("/votes", (req, res) => {
  res.render("index", { message: "こんにちは" });
});

module.exports = router;