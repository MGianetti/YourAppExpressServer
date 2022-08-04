const express = require("express");
const router = express.Router();
const httpStatus = require("http-status");

const Professional = require("../models/Professional");

router.post("/new", async (req, res) => {
  try {
    const newProfessional = await Professional.create(req.body);

    res.send(newProfessional);
  } catch (error) {
    res.status(500);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProfessionalId = await Professional.destroy({
    where: { id },
  });

  res.status(httpStatus.OK).json(deletedProfessionalId);
  try {
  } catch (error) {}
});

router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const editedProfessionalId = await Professional.update(
    { ...req.body },
    { where: { id } }
  );

  res.status(httpStatus.OK).json(editedProfessionalId);
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
