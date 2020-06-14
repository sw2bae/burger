const express = require("express");
const router = express.Router();
const burger = require("../models/burger");


router.get("/", async function (req, res) {
    const burgers = await burger.all();
    res.render("index", { burgers });
});

router.post("/api/burgers", async function (req, res) {
    const result = await burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ]);
    res.json({ id: result.insertId });

});

router.put("/api/burgers/:id", async function (req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);

    const updates = await burger.update({
        devoured: req.body.devoured
    }, condition);
    if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
});


module.exports = router;