import express from "express";
import DonationsController from "@controllers/donations/donations.controller";

const routes = express.Router();

routes.post("/", DonationsController.createDonation);
routes.get("/", DonationsController.getAllDonations);

export { routes };

