console.log("Starting server");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const reviewRoute = require("./Domain/Reviews/routes");
const menuRoute = require('./Domain/Menu/routes')

let app = express();
app.use(cors());

//Middleware que convierte a JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/review", reviewRoute);

app.use('/menu', menuRoute);


app.get("/*", (req, res) => {
  res.status(404);
  res.send(`No existe el recurso`);
});

app.listen(4000, () => {
  console.log("App cooriendo en el puerto 4000");
});
