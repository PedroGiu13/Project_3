const errorHandler = (res, error) => {
  console.log(error);
  res.status(error.status || 500);
  res.send({ message: error.message || "Ocurrio un error" });
};

module.exports =  {errorHandler};
