const { verifyToken } = require("../helpers/tokenGenerator");

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop();
    const tokenData = await verifyToken(token);
    console.log(tokenData)
  
    if (tokenData.id) {
      next();
    } else {
      res.status(409);
      res.send({ error: "Permiso denegado" });
    }
    
  } catch (error) {
    console.log(error);
    res.status(409);
    res.send({error: "Permiso denegado"})
  }
};

module.exports = checkAuth;
