const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.post("/new", async (req, res) => {
  try {
  } catch (error) {}
});

router.post("/delete", async (req, res) => {
  try {
  } catch (error) {}
});

router.put("/edit", async (req, res) => {
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
