const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./database/config/db.js");
const custom = require("./custom");
const Animales = require("./routes/animales");
const Granjeros = require("./routes/granjeros");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use("/custom", custom);

app.get("/test", (req, res) => {
  res.send("Hello World!");
});


app.use("/animales", Animales);,
app.use("/granjeros", Granjeros);

app.listen(6999, () => {
  console.log("Server is running on port 6999");
});
