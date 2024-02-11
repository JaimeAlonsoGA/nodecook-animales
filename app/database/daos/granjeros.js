const Granjeros = require("../models/granjeros");

const getAll = async () => {
  return await Granjeros.find();
};

const getById = async (id) => {
  return await Granjeros.findById(id);
};

const create = async (data) => {
  return await Granjeros.create(data);
};

const update = async (id, data) => {
  return await Granjeros.findByIdAndUpdate(id, data, {new: true});
};

const del = async (id) => {
  return await Granjeros.findByIdAndDelete(id);
};

const getByCustom = async (custom, params) => {
  return await Granjeros.find(custom);
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  getByCustom,
};