const multer = require("multer");
const express = require("express");
const path = require("path");
const router = express.Router();

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "..", "images"));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(new AppError("Not an image! Please upload an image.", 400), false);
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: imageFilter,
});

router.post("/upload", upload.single("newImage"), (req, res) => {
    if (!req.file) {
        console.log("No file received");
        return res.send({ success: false });
    } else {
        console.log("file received");
        return res.send({ success: true });
    }
});

/*
function sendMediaStore(filename, serverRequest, serverResponse) {
    let apiKey = process.env.ECS162KEY;
    if (apiKey === undefined) {
        serverResponse.status(400);
        serverResponse.send("No API key provided");
    } else {
        // we'll send the image from the server in a FormData object
        let form = new FormData();

        // we can stick other stuff in there too, like the apiKey
        form.append("apiKey", apiKey);
        // stick the image into the formdata object
        form.append("storeImage", fs.createReadStream(__dirname + filename));
        // and send it off to this URL
        form.submit("http://ecs162.org:3000/fileUploadToAPI", function (
            err,
            APIres
        ) {
            // did we get a response from the API server at all?
            if (APIres) {
                // OK we did
                console.log("API response status", APIres.statusCode);
                // the body arrives in chunks - how gruesome!
                // this is the kind stream handling that the body-parser
                // module handles for us in Express.
                let body = "";
                APIres.on("data", (chunk) => {
                    body += chunk;
                });
                APIres.on("end", () => {
                    // now we have the whole body
                    if (APIres.statusCode != 200) {
                        serverResponse.status(400); // bad request
                        serverResponse.send(" Media server says: " + body);
                    } else {
                        serverResponse.status(200);
                        serverResponse.send(body);
                    }
                });
            } else {
                // didn't get APIres at all
                serverResponse.status(500); // internal server error
                serverResponse.send("Media server seems to be down.");
            } // else
        });
    }
}
*/

module.exports = router;
