const multer = require("multer");
const path = require("path");
const imageStorage = multer.diskStorage({
  // Destination to store image
  destination: "storage/app/payments",
  filename: (req, file, cb) => {
    cb(null, "transfer_" + Date.now() + path.extname(file.originalname));
    // file.fieldname is name of the field (image)
    // path.extname get the uploaded file extension
  },
});
const upload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 5000000, // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});

module.exports = upload;
