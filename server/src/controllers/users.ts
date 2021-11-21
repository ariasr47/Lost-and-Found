import { Request, Response } from "express";
import { ItemModel } from "../db";
import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from "http-status-codes";

export const isValidUpload = (req: Request, res: Response) => {
  if (!req.file) {
    console.log("No file received");
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY);
  } else {
    console.log("file received");
    return res.status(StatusCodes.OK);
  }
};

export const addItem = (req: Request, res: Response) => {
  const data = req.body;
  ItemModel.create(data);
  res.json(data);
};

export const getItems = (req: Request, res: Response) => {
  ItemModel.findAll().then((items) => {
    res.json(items);
  });
};