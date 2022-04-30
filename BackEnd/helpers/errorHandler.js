const errorHandler = (res, err) => {
  console.log(err);
  res.status(500);
  res.send({ error: "Ocurrio un error" });
};

module.exports = { errorHandler };
