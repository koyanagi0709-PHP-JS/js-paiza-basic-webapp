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

router.get("/votes/:name",(req,res) => {
    const name = req.params.name;
    
    if(name === "kyoko") {
        kyokoCount++;
        res.render("results",{fullName:"霧島京子",count:kyokoCount});
    } else if(name === "rio") {
        rioCount++;
        res.render("results",{fullName:"六村リオ",count:rioCount});
    } else if(name === "tsubame") {
        tsubameCount++;
        res.render("results",{fullName:"緑川つばめ",count:tsubameCount});
    } else {
        res.status(404).render("404");
    }
});

module.exports = router;
