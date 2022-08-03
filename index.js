const express = require("express");
const sequelize = require("./database");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const clientsRoutes = require("./routes/clients-routes");
app.use("/clients", clientsRoutes);

const productsRoutes = require("./routes/products-routes");
app.use("/products", productsRoutes);

const professionalsRoutes = require("./routes/professionals-routes");
app.use("/professionals", professionalsRoutes);

const servicesRoutes = require("./routes/services-routes");
app.use("/services", servicesRoutes);

sequelize.sync({ force: true }).then(() => {
  console.log("Db is ready");
  app.listen(3001, () => {
    console.log("Server is running");
  });
});
