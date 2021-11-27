import express from "express";
import config from "../config/index";
import { logout } from "../controllers/auth";
import passport from "../passport";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/accepted",
  passport.authenticate("google", {
    successRedirect: config.PASSPORT.SUCCESS_REDIRECT,
    failureRedirect: config.PASSPORT.FAILURE_REDIRECT,
  })
);

router.get("/logout", logout);

export default router;
