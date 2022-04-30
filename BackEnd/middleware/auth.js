const { verifyToken } = require("../helpers/tokenGenerator");

const checkAuth = async (req, res, next) => {
  const token = req.headers.authorization.split("").pop();
  const tokenData = await verifyToken(token);

  if (tokenData._id) {
    next();
  } else {
    res.status(409);
    res.send({ error: "Permiso denegado" });
  }
};

module.exports = checkAuth;
