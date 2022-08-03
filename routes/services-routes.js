const express = require("express");
const router = express.Router();

const Service = require("../models/Service");

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
    const allServices = await Service.findAll();
    res.send(allServices);
  } catch (error) {
    res.status(500);
  }
});

module.exports = router;
