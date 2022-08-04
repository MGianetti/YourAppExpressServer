const express = require("express");
const router = express.Router();
const httpStatus = require("http-status");

const Client = require("../models/Client");

router.post("/new", async (req, res) => {
  try {
    const newClient = await Client.create(req.body);

    res.send(newClient);
  } catch (error) {
    res.status(500);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const deletedClientId = await Client.destroy({ where: { id } });

  res.status(httpStatus.OK).json(deletedClientId);
  try {
  } catch (error) {}
});

router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const editedClientId = await Client.update(
    { ...req.body },
    { where: { id } }
  );

  res.status(httpStatus.OK).json(editedClientId);
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
