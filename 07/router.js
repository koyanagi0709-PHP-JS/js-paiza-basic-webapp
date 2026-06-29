const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { message: "みなさんこんにちは！" });
});

router.get("/votes", (req, res) => {
  res.render("votes", { kyokoCount:0,rioCount:0,tsubameCount:0 });
});

module.exports = router;
