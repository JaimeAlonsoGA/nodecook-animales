const express = require("express");
const router = express.Router();
const Animales = require("../database/daos/animales");


router.get("/", async (req, res) => {  
  const item = await Animales.getAll();
  res.status(200).json(item);
});

router.get("/:id", async (req, res) => {  
  const item = await Animales.getById(req.params.id);
  res.status(200).json(item);
});

router.post("/", async (req, res) => {  
  const item = await Animales.create(req.body);
  res.status(200).json(item);
});

router.patch("/:id", async (req, res) => {  
  const item = await Animales.update(req.params.id, req.body);
  res.status(200).json(item);
});

router.delete("/:id", async (req, res) => {  
  const item = await Animales.del(req.params.id);
  res.status(200).json(item);
});

router.get("/byName/:value", async (req, res) => {  
  const item = await Animales.getByCustom(undefined,req.params);
  res.status(200).json(item);
});

module.exports = router;