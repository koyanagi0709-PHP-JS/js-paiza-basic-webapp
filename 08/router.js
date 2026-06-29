const router = require("express").Router();

let kyokoCount = 0;
let rioCount = 0;
let tsubameCount = 0;

router.get("/", (req, res) => {
  res.render("index", { message: "みなさんこんにちは！" });
});

router.get("/votes", (req, res) => {
  res.render("votes", { kyokoCount: kyokoCount, rioCount: rioCount, tsubameCount: tsubameCount });
});

router.get("/votes/kyoko",(req,res) => {
   kyokoCount++;
   res.render("results",{ fullName: "霧島京子", count:kyokoCount });
});

router.get("/votes/rio",(req,res) => {
   rioCount++;
   res.render("results",{ fullName: "六村リオ", count:rioCount });
});

router.get("/votes/tsubame",(req,res) => {
   tsubameCount++;
   res.render("results",{ fullName: "緑川つばめ", count:tsubameCount });
});

module.exports = router;
