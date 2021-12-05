import { Request, Response } from "express";

export const logout = async (req: Request, res: Response) => {
  req.session = null;
  req.logout();
  res.redirect("/");
};

export const getUser = async (req: Request, res: Response) => {
  res.json(req.user);
};
