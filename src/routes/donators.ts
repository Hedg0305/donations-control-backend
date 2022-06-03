import express from "express";
import DonatorsControler from "@controllers/donators/donators.controller";

const routes = express.Router();

routes.post("/", DonatorsControler.createDonator);
routes.get("/:donatorId/donations", DonatorsControler.getDonatorDonations);

export { routes };

