const express = require("express");
const router = express.Router();

const Client = require("../models/Client");

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
    const allClients = await Client.findAll();
    res.send(allClients);
  } catch (error) {
    res.status(500);
  }
});

module.exports = router;
