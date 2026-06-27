const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { message: "みなさんこんにちは！" });
});

module.exports = router;