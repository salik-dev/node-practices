// Express imports
const multer = require("multer");

// Normal imports
const Uploads = require("../Models/uploader");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploading = multer({ storage: storage });

// Upload api handler
exports.add = async (req, res) => {
  try {
    // Use multer middleware to handle the file upload
    uploading.single("image")(req, res, async function (err) {
      console.log('req output', req.file);
      if (err) {
        return res.status(400).json({ error: "File upload failed." });
      }

      // Now, you can access req.file to get the uploaded file information
      const data = {
        name: req.body.name,
        email: req.body.email,
        image: req.file ? req.file.destination + "/" + req.file.filename : null, // Check if a file was uploaded
      };
      console.log(data);

      // Mark this function as async to use await inside it
      const uploadImage = await Uploads.create(data);
      res.status(200).json({
        success: true,
        message: "Image uploaded successfully",
        data: uploadImage,
      });
    });
  } catch (error) {
    // Handle any errors that occur during file upload or data creation
    res.status(500).json({ error: "Internal server error" });
  }
};
