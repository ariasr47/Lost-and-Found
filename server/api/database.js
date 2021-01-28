const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const router = express.Router();

const db = new sqlite3.Database("items.db", (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Connected to the items database.");

        const cmd =
            " SELECT name FROM sqlite_master WHERE type='table' AND name='item' ";

        db.get(cmd, (err, row) => {
            if (row == undefined) {
                console.log("No database file - creating one");
                createDatabase();
            } else {
                console.log("Database file found");
            }
        });
    }
});

function createDatabase() {
    const cmd = `CREATE TABLE item ( 
        item_id     INTEGER PRIMARY KEY, 
        status      TEXT NOT NULL, 
        title       TEXT NOT NULL, 
        category    TEXT NOT NULL, 
        description TEXT, 
        photo       TEXT, 
        datetime    DATETIME, 
        location    TEXT 
    )`;

    db.run(cmd, (err) => {
        if (err) {
            console.log("Database creation failure", err.message);
        } else {
            console.log("Created database");
        }
    });
}

router.post("/row", (req, res) => {
    const data = req.body;
    const params = [
        data.status,
        data.title,
        data.category,
        data.description,
        data.photo,
        data.datetime,
        data.location,
    ];

    const columns = `(status, title, category, description, photo, datetime, location)`;
    const values = `(?, ?, ?, ?, ?, ?, ?, ?)`;

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
