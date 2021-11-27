import multer from "multer";
import path from "path";
import config from "./config";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dest = path.join(__dirname, config.MULTER.DESTINATION);
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
