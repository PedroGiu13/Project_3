const { encrypt, compare } = require("../../helpers/bcryptHandler");
const { tokenSign } = require("../../helpers/tokenGenerator");
const { errorHandler } = require("../../helpers/errorHandler");
const Users = require("./auth");

const loginCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ where: { email: email } });

    if (!user) {
      res.status(404);
      res.send("User not found");
    }

    const checkPassword = await compare(password, user.password);
    const tokenSession = await tokenSign(user);

    if (checkPassword) {
      res.send({
        data: user,
        tokenSession,
      });
      return;
    }

    if (!checkPassword) {
      res.status(409);
      res.send({
        error: "Password invalido",
      });
      return;
    }
  } catch (e) {
    errorHandler(res, e);
  }
};

const registerCtrl = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const hashPassword = await encrypt(password);

    const registerUser = await Users.create({
      email,
      name,
      password: hashPassword,
    });

    res.send({ data: registerUser });
  } catch (e) {
    errorHandler(res, e);
  }
};

const getUsers = async (req, res) => {
  try {
    const usersList = await Users.findAll();
    res.send({
      usersList,
      message: "Lista de usuarios permitida solo para el rol: Admin",
    });
  } catch (error) {
    errorHandler(res, e);
  }
};

module.exports = { registerCtrl, loginCtrl, getUsers };
