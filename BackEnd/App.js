console.log("Starting server");

require("dotenv").config();

const sequelize = require("./database/db");
const reviewExecute = require("./database/review-initializer");
const menuExecute = require("./database/menu-initializer");
const productExecute = require("./database/product-initializer");
const contactExecute = require("./database/contact-initializer");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

let app = express();

const reviewRoute = require("./Domain/Reviews/review.routes");
const menuRoute = require("./Domain/Menu/menu.routes");
const productRoute = require("./Domain/Products/products.routes");
const contactRoute = require("./Domain/Contacts/contacts.routes");
const authRoute = require("./Domain/Auth/auth.routes");

//Middleware que convierte a JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/auth", authRoute);

app.use("/review", reviewRoute);

app.use("/menuList", menuRoute);

app.use("/productList", productRoute);

app.use("/contactList", contactRoute);

app.get("/*", (req, res) => {
  res.status(404);
  res.send(`No existe el recurso`);
});

app.listen(4000, async () => {
  await sequelize.sync({ force: true });
  reviewExecute();
  menuExecute();
  productExecute();
  contactExecute();
  console.log("Server running on port 4000");
});
