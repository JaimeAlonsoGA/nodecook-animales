const mongoose = require("mongoose");

const GranjerosSchema = new mongoose.Schema(
    {id: "UUID",Name: "String",Age: "Number",isMarried: "Boolean",}
);

const Granjeros = mongoose.model("Granjeros", GranjerosSchema);

module.exports = Granjeros;