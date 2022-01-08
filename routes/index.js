const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index", {
        css: ['style'],
    })
});

module.exports = router;
