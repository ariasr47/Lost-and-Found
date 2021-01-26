const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();

const database = require("./api/database.js");
const storage = require("./api/storage.js");
const oauth = require("./api/oauth.js");

app.use("/api/database", database);
app.use("/api/storage", storage);
app.use("/", oauth);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
