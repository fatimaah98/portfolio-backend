const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

module.exports = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "..", "public", "courses", "covers"));
    },
    filename: (req, file, cb) => {
        // const name = Date.now() + (Math.random() * 999);
        const name = crypto.createHash('SHA256').update(file.originalname).digest("hex");
        const extName = path.extname(file.originalname);
        cb(null, name + extName);
    }
})