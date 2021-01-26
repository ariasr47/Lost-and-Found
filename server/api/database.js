const express = require("express");
const router = express.Router();

router.post("/row", (req, res) => {
    const {
        lost_found,
        title,
        category,
        description,
        photo_url,
        date,
        time,
        location,
    } = req.body;

    const columns = `(lost_found, title, category, description, photo_url, date, time, location)`;
    const values = `(?, ?, ?, ?, ?, ?, ?, ?)`;

    const params = [
        lost_found,
        title,
        category,
        description,
        photo_url,
        date,
        time,
        location,
    ];

    const cmd = `INSERT INTO item ${columns} VALUES ${values}`;

    db.run(cmd, params, (err) => {
        if (err) {
            console.log("DB insert error", err.message);
        }
    });

    res.end();
});

router.get("/row", (req, res) => {
    res.json("get request: api/row");
});

module.exports = router;
