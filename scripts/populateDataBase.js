const { clientsData } = require("./clientsData");
const { productsData } = require("./productsData");
const { professionalsData } = require("./professionalsData");
const { servicesData } = require("./servicesData");

const Client = require("../models/Client");
const Professional = require("../models/Professional");
const Product = require("../models/Product");
const Service = require("../models/Service");

clientsData.forEach(async (service) => await Client.create(service));
professionalsData.forEach(
  async (service) => await Professional.create(service)
);
productsData.forEach(async (service) => await Product.create(service));
servicesData.forEach(async (service) => await Service.create(service));
