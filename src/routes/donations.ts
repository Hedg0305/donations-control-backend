import express, { Request, Response } from "express";
import { PrismaDonationsRepository } from "@repositories/prisma/donations-repository";
import { CreateDonationUseCase } from "@use-cases/donations/create-donation-use-case";
import DonationsController from "@controllers/donations/donations.controller";

const routes = express.Router();

routes.post("/", DonationsController.createDonation);
routes.get("/", DonationsController.getAllDonations);

export { routes };

