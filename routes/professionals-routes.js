const express = require("express");
const router = express.Router();

const Professional = require("../models/Professional");

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
    const allProfessionals = await Professional.findAll();
    res.send(allProfessionals);
  } catch (error) {
    res.status(500);
  }
});

module.exports = router;
