const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();

const database = require("./api/database.js");
const storage = require("./api/storage.js");
//const oauth = require("./api/oauth.js");

// enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", database);
app.use("/api", storage);
//app.use("/", oauth);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../my-app/build")));
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../my-app/build", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
