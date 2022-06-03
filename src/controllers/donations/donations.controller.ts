import { PrismaDonationsRepository } from "@repositories/prisma/donations-repository";
import { CreateDonationUseCase } from "@use-cases/donations/create-donation-use-case";
import { GetAllDonationUseCase } from "@use-cases/donations/get-all-donations-use-case";
import { Request, Response } from "express";

const createDonation = (req: Request, res: Response) => {
  const prismaDonationsRepository = new PrismaDonationsRepository();
  const createDonationUseCase = new CreateDonationUseCase(
    prismaDonationsRepository
  );

  const { donatorId, courierId, telemarketingId, amount, date } = req.body;

  createDonationUseCase.execute({
    donatorId,
    courierId,
    telemarketingId,
    amount,
    date,
  });

  return res.json({ message: "Created" });
};

const getAllDonations = async (req: Request, res: Response) => {
  const prismaDonationsRepository = new PrismaDonationsRepository();
  const getAllDonationsUseCase = new GetAllDonationUseCase(
    prismaDonationsRepository
  );

  const donations = await getAllDonationsUseCase.execute();

  return res.json({
    data: {
      total: donations.length,
      donations,
    },
  });
};

export default { createDonation, getAllDonations };

