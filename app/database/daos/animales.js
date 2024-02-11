const Animales = require("../models/animales");

const getAll = async () => {
  return await Animales.find();
};

const getById = async (id) => {
  return await Animales.findById(id);
};

const create = async (data) => {
  return await Animales.create(data);
};

const update = async (id, data) => {
  return await Animales.findByIdAndUpdate(id, data, {new: true});
};

const del = async (id) => {
  return await Animales.findByIdAndDelete(id);
};

const getByCustom = async (custom, params) => {
  return await Animales.find(custom);
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  getByCustom,
};