const jwt = require("jsonwebtoken");
const UserModel = require("../model/User");

var checkUserAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // Get Token from header
      token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const userId = decoded.userID;

      // Get User from token
      req.user = await UserModel.findById(userId).select("-password");
      
      if (!req.user) {
        return res.status(401).send({ status: "failed", message: "Unauthorized User" });
      }
      
      next();
    } catch (error) {
      console.log("Error in middleware:", error);
      res.status(401).send({ status: "failed", message: "Unauthorized User" });
    }
  } else {
    res.status(401).send({ status: "failed", message: "Unauthorized User, No Token" });
  }
};

module.exports = checkUserAuth;
