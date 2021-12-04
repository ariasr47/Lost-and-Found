import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Op } from "sequelize";
import { ItemModel } from "../models";

export const isValidUpload = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY);
  } else {
    return res.status(StatusCodes.OK);
  }
};

export const addItem = (req: Request, res: Response) => {
  const data = req.body;
  ItemModel.create(data);
  res.json(data);
};

export const getItems = (req: Request, res: Response) => {
  const { query } = req.query;
  ItemModel.findAll(
    query && {
      where: {
        title: { [Op.like]: `%${query}%` },
      },
    }
  ).then((items) => {
    res.json(items);
  });
};
