console.log("Starting server");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const reviewRoute = require("./Domain/Reviews/routes");
const menuRoute = require('./Domain/Menu/routes')
const productRoute = require('./Domain/Products/routes');
const contactRoute = require('./Domain/Contacts/routes');


let app = express();
app.use(cors());

//Middleware que convierte a JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/review", reviewRoute);

app.use('/menuList', menuRoute);

app.use('/productList', productRoute)

app.use('/contactList', contactRoute )


app.get("/*", (req, res) => {
  res.status(404);
  res.send(`No existe el recurso`);
});

app.listen(4000, () => {
  console.log("Running on port 4000");
});
