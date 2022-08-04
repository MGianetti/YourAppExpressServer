const express = require("express");
const router = express.Router();
const httpStatus = require("http-status");

const Service = require("../models/Service");

router.post("/new", async (req, res) => {
  try {
    const newService = await Service.create(req.body);
    res.send(newService);
  } catch (error) {
    res.status(500);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const deletedServiceId = await Service.destroy({ where: { id } });

  res.status(httpStatus.OK).json(deletedServiceId);
  try {
  } catch (error) {}
});

router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const editedServiceId = await Service.update(
    { ...req.body },
    { where: { id } }
  );

  res.status(httpStatus.OK).json(editedServiceId);
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
