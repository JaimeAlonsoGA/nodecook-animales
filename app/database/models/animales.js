const mongoose = require("mongoose");

const AnimalesSchema = new mongoose.Schema(
    {id: "UUID",Name: "String",Type: "String",Age: "Number",}
);

const Animales = mongoose.model("Animales", AnimalesSchema);

module.exports = Animales;