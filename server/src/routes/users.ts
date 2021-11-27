import express from "express";
import { addItem, getItems, isValidUpload } from "../controllers/users";
import { requireLogin } from "../middleware/auth";
import upload from "../multer";

const router = express.Router();

router.use(requireLogin);

router.post("/upload", upload.single("newImage"), isValidUpload);

router.post("/item", addItem);

router.get("/items", getItems);

export default router;
