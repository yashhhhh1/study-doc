const { Router } = require("express");
// const userdb = require("../modul/user");
// const jwt = require("jsonwebtoken");

const authenticate = require("../middleware/Authentication");

const router = Router();
const bodyParser = require("body-parser");

const { AuthenticationForSignUp, AuthenticationForlogIn } = require("../contrallers/Authentication");

router.use(bodyParser.json());

router.post("/signup", AuthenticationForSignUp);
router.post("/login", AuthenticationForlogIn);


router.get("/logout", authenticate, async (req, res) => {
  try {
    req.rootUser.tokens = req.rootUser.tokens.filter((curlem) => {
      return curlem.token !== req.token;
    });

    res.clearCookie("usercookie");
    await req.rootUser.save();
    res.status(200).json({ status: 200 });
  } catch (error) {
    res.status(401).json({ status: 401 });
  }
});


router.get("/userDetails", authenticate,async (req, res) => {
  try {
    
    // const verifyToken = jwt.verify(req.headers.authorization, keyscreat);
    const validUserOne = await userdb.findById({ _id:req.rootUser._id });

    res.status(200).json({ status: 200 ,validUserOne});
  } catch (error) {
    // res.status(401).json({ status: 401 });
    console.log(error);
  }
});

module.exports = router;
