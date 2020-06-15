const express = require("express");
const router = express.Router();
const burger = require("../models/burger");


router.get("/", async function (req, res) {
    const burgers = await burger.all();
    res.render("index", { burgers });
});

router.post("/api/burgers", async function (req, res) {
    const result = await burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ]);
    res.json({ id: result.insertId });

});

router.put("/api/burgers/:id", async function (req, res) {
    const condition = "id = " + req.params.id;
    const updates = await burger.update(condition);
});


module.exports = router;