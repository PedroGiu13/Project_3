console.log("Starting server");

require('dotenv').config();

const sequelize = require('./database/db')
const execute = require('./database/initialize');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

let app = express();

const reviewRoute = require("./Domain/Reviews/review.routes");
const menuRoute = require("./Domain/Menu/menu.routes");
const productRoute = require("./Domain/Products/products.routes");
const contactRoute = require("./Domain/Contacts/contacs.routes");

//Middleware que convierte a JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/review", reviewRoute);

app.use("/menuList", menuRoute);

app.use("/productList", productRoute);

app.use("/contactList", contactRoute);

app.get("/*", (req, res) => {
  res.status(404);
  res.send(`No existe el recurso`);
});

app.listen(4000, () => {
  console.log("Correindo en 4000")
})

// app.listen(4000, async () => {
//   await sequelize.sync({force:true})
//   // execute();
//   console.log('Server running on port 4000')
// });
