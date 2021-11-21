import express from "express";

import passport from "../config/passport";
import { requireLogin } from "../middleware/auth";
import { logout, loadUser } from "../controllers/auth";

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
    successRedirect: `${process.env["DEV_BASE_URL"]}/users/Home`,
    failureRedirect: `${process.env["DEV_BASE_URL"]}/`,
  })
);

router.get("/logout", logout);

router.get("/user", requireLogin, loadUser);

export default router;
