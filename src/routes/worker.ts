import express, { Request, Response } from "express";
import { PrismaWorkerRepository } from "../repositories/prisma/worker-repository";
import { CreateWorkerUseCase } from "../use-cases/worker/create-worker-use-case";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Hello from donations");
});

routes.post("/", (req: Request, res: Response) => {
  const prismaWorkerRepository = new PrismaWorkerRepository();
  const cretateWorkerUseCase = new CreateWorkerUseCase(prismaWorkerRepository);

  const { address, email, name, phone, role } = req.body;

  cretateWorkerUseCase.execute({ address, email, name, phone, role });

  res.send("Hello from worker");
});

export { routes };

