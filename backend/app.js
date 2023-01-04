//Import npm
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: process.cwd() + "/.env" });
const cors = require("cors");

//Import in local
const pool = require("./models/index");
const productRoute = require("./routes/productRoutes");
//Define App function
const app = express();

//define port
const port = process.env.PORT;

//Database Connection
pool.connect((error, client, release) => {
  if (error) {
    console.log(error);
  }
  console.log("Database Connected");
});
//ENV config
dotenv.config();

app.get("/", (request, response) => {
  response.json({ info: "Welcome to the Ecommerce App" });
});

// MiddleWares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/product", productRoute);

app.listen(port, () => {
  console.log(`Bella Store listening on port ${port}`);
});
