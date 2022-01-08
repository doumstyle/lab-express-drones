const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index", {
        css: ['style'],
        image: 'https://iconape.com/wp-content/png_logo_vector/stark-industries-logo.png',
    })
});

module.exports = router;
