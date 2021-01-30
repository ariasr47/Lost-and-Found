const express = require("express");
const router = express.Router();

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const request = require("request");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL:
                "https://gentle-island-66437.herokuapp.com/auth/accepted",
            userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
            scope: ["email", "profile"],
        },
        gotProfile
    )
);

router.use(cookieParser());

router.use("/", printIncomingRequest);

router.use(
    expressSession({
        secret: "bananaBread",
        maxAge: 6 * 60 * 60 * 1000,
        resave: true,
        saveUninitialized: false,
        name: "ecs162-session-cookie",
    })
);

router.use(passport.initialize());

router.use(passport.session());

router.get("/user/*", requireLogin, requireUser, express.static("."));

router.get("/auth/google", passport.authenticate("google"));

router.get(
    "/auth/accepted",
    passport.authenticate("google", {
        successRedirect: "/setcookie",
        failureRedirect: "/?email=notUCD",
    })
);

router.get("/setcookie", requireUser, function (req, res) {
    res.cookie("google-passport-example", new Date());
    res.redirect("/user/Home");
});

router.get("/user/logoff", function (req, res) {
    res.clearCookie("google-passport-example");
    res.clearCookie("ecs162-session-cookie");
    res.redirect("/");
});

function printIncomingRequest(req, res, next) {
    console.log("Serving", req.url);
    if (req.cookies) {
        console.log("cookies", req.cookies);
    }
    next();
}

function gotProfile(accessToken, refreshToken, profile, done) {
    let id = profile.id;
    let displayName = profile.displayName;
    let email = profile.emails[0].value;

    console.log("id : " + id);
    console.log("name :" + displayName);
    console.log("email :" + email);

    let dbRowID = 1;

    let [user, domain] = email.split("@");

    console.log("user = ", user);
    console.log("domain = ", domain);

    if (domain != "ucdavis.edu") {
        request.get(
            "https://accounts.google.com/o/oauth2/revoke",
            {
                qs: { token: accessToken },
            },
            function (err, res, body) {
                console.log("revoked token");
            }
        );
        dbRowID = 0;
    }

    done(null, dbRowID);
}

passport.serializeUser((dbRowID, done) => {
    console.log("SerializeUser. Input is", dbRowID);
    done(null, dbRowID);
});

passport.deserializeUser((dbRowID, done) => {
    console.log("deserializeUser. Input is:", dbRowID);

    let userData = { userData: dbRowID };
    done(null, userData);
});

function requireUser(req, res, next) {
    console.log("require user", req.user);
    if (!req.user) {
        res.redirect("/?email=notUCD");
    } else {
        console.log("user is", req.user);
        next();
    }
}

function requireLogin(req, res, next) {
    console.log("checking:", req.cookies);
    if (!req.cookies["ecs162-session-cookie"]) {
        res.redirect("/");
    } else {
        next();
    }
}

module.exports = router;
