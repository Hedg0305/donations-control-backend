import { PrismaCourierRepository } from "@repositories/prisma/courier-repository";
import { CreateCourierUseCase } from "@use-cases/courier/create-courier-use-case";
import { GetCourierDonations } from "@use-cases/courier/get-courier-donations-use-case";
import { formatDatePeriod } from "@utils/index";
import express, { Request, Response } from "express";
import CourierController from "@controllers/courier/courier.controller";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Hello from courier");
});

routes.post("/", CourierController.createCourier);

routes.get("/:courierId/donations", CourierController.getCourierDonations);

export { routes };

