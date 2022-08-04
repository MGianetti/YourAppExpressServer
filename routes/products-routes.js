const express = require("express");
const router = express.Router();
const httpStatus = require("http-status");

const Product = require("../models/Product");

router.post("/new", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.send(newProduct);
  } catch (error) {
    res.status(500);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProductId = await Product.destroy({ where: { id } });

  res.status(httpStatus.OK).json(deletedProductId);
  try {
  } catch (error) {}
});

router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const editedProductId = await Product.update(
    { ...req.body },
    { where: { id } }
  );

  res.status(httpStatus.OK).json(editedProductId);
  try {
  } catch (error) {}
});

router.get("/all", async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    res.send(allProducts);
  } catch (error) {
    res.status(500);
  }
});

module.exports = router;
