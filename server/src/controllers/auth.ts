import { Request, Response } from "express";

export const logout = (req: Request, res: Response) => {
  req.session = null;
  req.logout();
  res.redirect("/");
};

export const getUser = (req: Request, res: Response) => {
  res.json(req.user);
};
