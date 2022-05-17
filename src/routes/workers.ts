import { GetWorkerDonations } from "@use-cases/worker/get-worker-donations-use-case";
import { formatDatePeriod } from "@utils/index";
import { format, formatISO, startOfMonth, subMonths } from "date-fns";
import express, { Request, Response } from "express";
import { PrismaWorkerRepository } from "../repositories/prisma/worker-repository";
import { CreateWorkerUseCase } from "../use-cases/worker/create-worker-use-case";

interface GetDonationsParams {
  start: string;
  end: string;
}

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
  const { start: startDate, end: endDate } =
    req.query as unknown as GetDonationsParams;

  const { endDate: end, startDate: start } = formatDatePeriod({
    startDate,
    endDate,
  });

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

