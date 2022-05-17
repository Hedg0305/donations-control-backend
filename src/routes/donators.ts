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

routes.get("/:id/donations", (req: Request, res: Response) => {
  const prismaDonatorsRepository = new PrismaDonatorsRepository();
  const createDonatorUseCase = new GetDonatorDonationsUseCase(
    prismaDonatorsRepository
  );

  const { id: donatorId } = req.params;
  console.log(donatorId);

  const donations = createDonatorUseCase.execute({ donatorId });

  res.json({
    data: {
      donations,
    },
  });
});

export { routes };

