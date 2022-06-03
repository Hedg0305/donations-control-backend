import express from "express";
import TelemarketingController from "@controllers/telemarketing/telemarketing.controller";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Hello from donations");
});

routes.post("/", TelemarketingController.createTelemarketing);
routes.get("/:telemarketingId/donations");

export { routes };

