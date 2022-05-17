import { PrismaDonatorsRepository } from "@repositories/prisma/donators-repository";
import { CreateDonatorUseCase } from "@use-cases/donators/create-donator-use-case";
import express from "express";

const routes = express.Router();

routes.post("/", (req, res) => {
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

  console.log(new Date())
  res.send("User created");
});

export { routes };

