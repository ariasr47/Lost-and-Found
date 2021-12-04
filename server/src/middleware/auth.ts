import { Request, Response, NextFunction } from "express";

export const requireLogin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated()) {
    res.sendStatus(401);
    res.redirect("/");
  } else {
    next();
  }
};
