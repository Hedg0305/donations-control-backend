import express from "express";
import CourierController from "@controllers/courier/courier.controller";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Hello from courier");
});

routes.post("/", CourierController.createCourier);
routes.get("/:courierId/donations", CourierController.getCourierDonations);

export { routes };

