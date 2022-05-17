import express, { Request, Response } from "express";
import { PrismaDonationsRepository } from "@repositories/prisma/donations-repository";
import { CreateDonationUseCase } from "@use-cases/donations/create-donation-use-case";

const routes = express.Router();

routes.post("/", (req: Request, res: Response) => {
  const prismaDonationsRepository = new PrismaDonationsRepository();
  const createDonationUseCase = new CreateDonationUseCase(
    prismaDonationsRepository
  );

    const { donatorId, workerId, amount, date } = req.body;

   createDonationUseCase.execute({
    donatorId,
    workerId,
    amount,
    date,
  });

  


  return res.json({ message: "Created" });
});

export { routes };

