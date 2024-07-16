const jwt = require("jsonwebtoken");
const userdb = require("../modul/user");
const keyscreat = "paelyashyogeshbhaipaelyashyogesh";

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization; //token 
    const verifyToken = jwt.verify(token, keyscreat);

    const rootUser = await userdb.findById(verifyToken._id);

    if (!rootUser) {
      throw new Error("User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;

    next();
  } catch (error) {
    res.status(401).json("Unauthorized: No token provided");
  }
};

module.exports = authenticate;
