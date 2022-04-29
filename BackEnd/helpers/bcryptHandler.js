const bcrypt = require("bcryptjs");

const encrypt = async (plainText) => {
  const hash = await bcrypt.hash(plainText, 10);
  return hash;
};

const compare = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

module.exports = { encrypt, compare };
