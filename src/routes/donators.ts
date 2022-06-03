import { PrismaDonatorsRepository } from "@repositories/prisma/donators-repository";
import { CreateDonatorUseCase } from "@use-cases/donators/create-donator-use-case";
import { GetDonatorDonationsUseCase } from "@use-cases/donators/get-donator-donations-use-case";
import express, { Request, Response } from "express";

const routes = express.Router();

routes.post("/", (req: Request, res: Response) => {
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
});

routes.get("/:donatorId/donations", async (req: Request, res: Response) => {
  const prismaDonatorsRepository = new PrismaDonatorsRepository();
  const createDonatorUseCase = new GetDonatorDonationsUseCase(
    prismaDonatorsRepository
  );

  const { donatorId } = req.params;

  const donations = await createDonatorUseCase.execute({ donatorId });

  res.json({
    data: {
      donations,
    },
  });
});

routes.get("/:id/donations/amount", async (req: Request, res: Response) => {
  const prismaDonatorsRepository = new PrismaDonatorsRepository();
  const createDonatorUseCase = new GetDonatorDonationsUseCase(
    prismaDonatorsRepository
  );

  const { id: donatorId } = req.params;

  const donations = await createDonatorUseCase.execute({ donatorId });
  const amount = donations.reduce((acc, donation) => {
    return acc + donation.amount;
  }, 0);

  res.json({
    data: {
      amount,
    },
  });
});

export { routes };

