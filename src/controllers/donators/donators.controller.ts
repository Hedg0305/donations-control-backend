import { PrismaDonatorsRepository } from "@repositories/prisma/donators-repository";
import { CreateDonatorUseCase } from "@use-cases/donators/create-donator-use-case";
import { GetDonatorDonationsUseCase } from "@use-cases/donators/get-donator-donations-use-case";
import { Request, Response } from "express";

export const createDonator = (req: Request, res: Response) => {
  const prismaDonatorsRepository = new PrismaDonatorsRepository();
  const createDonatorUseCase = new CreateDonatorUseCase(
    prismaDonatorsRepository
  );

  const { name, email, phone, address } = req.body;

  createDonatorUseCase.execute({
    name,
    email,
    phone,
    address,
  });

  console.log(new Date());
  res.send("User created");
};

export const getDonatorDonations = async (req: Request, res: Response) => {
  const prismaDonatorsRepository = new PrismaDonatorsRepository();
  const createDonatorUseCase = new GetDonatorDonationsUseCase(
    prismaDonatorsRepository
  );

  const { donatorId } = req.params;

  const donations = await createDonatorUseCase.execute({ donatorId });
  const total = donations.reduce((acc, donation) => {
    return acc + donation.amount;
  }, 0);

  res.json({
    data: {
      total,
      donations,
    },
  });
};

export default { createDonator, getDonatorDonations };

