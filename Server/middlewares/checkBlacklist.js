const TokenBlacklist = require('../model/TokenBlacklist.modal');

const checkBlacklist = async (req, res, next) => {
  try {
    // Ensure there's a token in the request header
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      return res.status(401).send({ status: 'failed', msg: 'Authorization header is missing' });
    }

    // Extract the token from the header
    const token = authHeader.replace('Bearer ', '');

    // Check if the token is blacklisted
    const blacklistedToken = await TokenBlacklist.findOne({ token });

    if (blacklistedToken) {
      return res.status(401).send({ status: 'failed', msg: 'Token is blacklisted' });
    }

    // If the token is not blacklisted, proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error('Error in checkBlacklist middleware:', error);
    res.status(500).send({ status: 'failed', msg: 'Internal server error' });
  }
};

module.exports = checkBlacklist;
