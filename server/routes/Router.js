const { Router } = require("express");
const upload = require("../middleware/upload");
const upload_doc = require("../modul/upload_doc");

const router = Router();

router.post("/upload", upload.single("file"), async (req, res) => {
  if (req.file) {
    const filePath = req.file.path.replace(/\\/g, "/");
    const relativeFilePath = `/${filePath}`;

    const { c_name, s_name, category, description } = req.body;

    const uploadDoc = new upload_doc({
      c_name: c_name,
      s_name: s_name,
      category: category,
      filePath: relativeFilePath,
      description: description,
    });

    const savedUser = await uploadDoc.save();

    res.cookie("Access_user" , true ,{ httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

    return res.status(200).json({ message: "Successfully uploaded", status: 200 });
  } else {
    return res.status(404).json({ message: "No file uploaded.", status: 404 });
  }
});


router.get("/cource/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await upload_doc.find({ c_name: id.toLowerCase() }); // Assuming you are looking for `upload_doc` documents
    return res.status(200).json({ message: "Successfully fetch the data", result });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred' });
  }
});

router.get("/subject/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await upload_doc.find({ s_name: id.toLowerCase() }); // Assuming you are looking for `upload_doc` documents
    return res.status(200).json({ message: "Successfully fetch the data", result });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred' });
  }
});



router.get("/subjectdetail/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await upload_doc.find({ _id: id });

    // Retrieve the cookie
    const Access_user = req.cookies.Access_user;

    if (Access_user) {
      return res.status(200).json({ message: "Successfully fetch the data", result });
    } else {
      return res.status(401).json({ message: "Upload some document then access this file", status: 401 });
    }
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred' });
  }
});



module.exports = router;


