import { GetWorkerDonations } from "@use-cases/worker/get-worker-donations-use-case";
import { format, formatISO, subMonths } from "date-fns";
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
//query paraters are start and end timestamp
routes.get("/:id/donations", async (req: Request, res: Response) => {
  const prismaWorkerRepository = new PrismaWorkerRepository();
  const getDonatorDonationsUseCase = new GetWorkerDonations(
    prismaWorkerRepository
  );

  const { id: workerId } = req.params;
  let { start, end } = req.query;

  //Default should be the last month
  if (!start && !end) {
    start = formatISO(subMonths(new Date(), 1));
    end = formatISO(new Date());
  }

  //If start is not defined, set it to the last month from the ending date
  if (!start && end) {
    start = formatISO(subMonths(new Date(String(end)), 1));
  }

  //If end is not defined, set it to the current date
  if (!end) {
    end = formatISO(new Date());
  }

  const donations = await getDonatorDonationsUseCase.execute({
    workerId,
    end,
    start,
  });

  res.json({
    data: {
      donations,
    },
  });
});

export { routes };

