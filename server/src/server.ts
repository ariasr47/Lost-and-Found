import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import expressRequestId from "express-request-id";
import session, { SessionOptions } from "express-session";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import config from "./config";
import sequelize from "./db";
import passport from "./passport";
import authRouter from "./routes/auth";
import userRouter from "./routes/users";
import cluster from "cluster";

const SESSION_OPTIONS: SessionOptions = {
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    signed: true,
    secure: true,
    httpOnly: false,
  },
  name: "ucdavis-lostandfound-session-cookie",
  resave: false,
  saveUninitialized: false,
  secret: config.SESSION.SECRET,
  unset: "destroy",
};

const PORT = process.env.PORT || 4000;

const app = express();

const addRequestId = expressRequestId({
  setHeader: false,
});

morgan.token("id", (req, res, arg) => {
  return req["id"].split("-")[0];
});

app.use(addRequestId);
app.use(
  morgan("[:date #:id] :method :url", {
    immediate: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(config.SESSION.SECRET));
app.use(session(SESSION_OPTIONS));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/users", userRouter);
app.use("/auth", authRouter);

if (process.env.NODE_ENV === "production") {
  app.use(helmet.hidePoweredBy());

  app.use(
    "/static/js",
    express.static(path.join(__dirname, "./static/js"), {
      setHeaders: (res, path, stat) => {
        res.setHeader("Cache-Control", "public, max-age=31536000");
        res.setHeader("Content-Encoding", "gzip");
      },
    })
  );

  app.use(
    "/static/css",
    express.static(path.join(__dirname, "./static/css"), {
      setHeaders: (res, path, stat) => {
        res.setHeader("Cache-Control", "public, max-age=31536000");
        res.setHeader("Content-Encoding", "gzip");
      },
    })
  );

  app.use(
    "/static/media",
    express.static(path.join(__dirname, "./static/media"), {
      setHeaders: (res, path, stat) => {
        res.setHeader("Cache-Control", "public, max-age=31536000");
      },
    })
  );

  app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

  app.get("/*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "./index.html"));
  });
}

app.listen(PORT, () => {
  console.info(`Server started on port: ${PORT}`);
  sequelize
    .sync()
    .then((Sequelize) => {
      console.info("Connection to database is established!");
    })
    .catch((error) => {
      console.error(error);
    });
});
