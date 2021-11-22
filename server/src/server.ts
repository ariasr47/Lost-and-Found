import express, { NextFunction, Request, Response } from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import keys from "./config/keys";
import passport from "./config/passport";
import authRouter from "./routes/auth";
import userRouter from "./routes/users";
import { sequelize } from "./db";
// import morgan from "morgan";
// import expressRequestId from "express-request-id";

const PORT = process.env.PORT || 4000;

const app = express();

/*
const addRequestId = expressRequestId({
  setHeader: false,
});

app.use(addRequestId);


morgan.token("id", (req) => {
  return req.id.split("-")[0];
});


app.use(
  morgan("[:date[iso] #:id] Started :method :url for :remote-addr", {
    immediate: true,
  })
);
*/

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(keys.session.cookieKey));
app.use(
  session({
    name: "ecs162-session-cookie",
    secret: keys.session.cookieKey,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
//app.use(express.static(path.join(__dirname, '../uploads')))

// Routes
app.use("/users", userRouter);
app.use("/auth", authRouter);

if (process.env.NODE_ENV === "production") {
  app.use("/static/js",
    express.static(path.join(__dirname, "./static/js"), {
      setHeaders: (res, path, stat) => {
        res.setHeader("Cache-Control", "public, max-age=31536000");
        res.setHeader("Content-Encoding", "gzip");
      },
    })
  );

  app.use("/static/css",
    express.static(path.join(__dirname, "./static/css"), {
      setHeaders: (res, path, stat) => {
        res.setHeader("Cache-Control", "public, max-age=31536000");
        res.setHeader("Content-Encoding", "gzip");
      },
    })
  );

  app.use("/static/media",
    express.static(path.join(__dirname, "./static/media"), {
      setHeaders: (res, path, stat) => {
        res.setHeader("Cache-Control", "public, max-age=31536000");
      },
    })
  );

  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });
}

sequelize
  .sync()
  .then(() => {
    console.log("Connection to database is established!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
