import { PrismaTelemarketingRepository } from "@repositories/prisma/telemarketing-repository";
import { CreateTelemarketingUseCase } from "@use-cases/telemarketing/create-telemarketing-use-case";
import { GetTelemarketingDonations } from "@use-cases/telemarketing/get-telemarketing-donations-use-case";
import { formatDatePeriod } from "@utils/index";
import express, { Request, Response } from "express";

interface GetDonationsParams {
  start: string;
  end: string;
}

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Hello from donations");
});

routes.post("/", (req: Request, res: Response) => {
  const prismaTelemarketingRepository = new PrismaTelemarketingRepository();
  const cretateCourierUseCase = new CreateTelemarketingUseCase(
    prismaTelemarketingRepository
  );

  const { address, email, name, phone } = req.body;

  cretateCourierUseCase.execute({ address, email, name, phone });
  cretateCourierUseCase;
  res.send("Hello from worker");
});
//query paraters are start and end timestamp
routes.get(
  "/:telemarketingId/donations",
  async (req: Request, res: Response) => {
    const prismaTelemarketingRepository = new PrismaTelemarketingRepository();
    const getDonatorDonationsUseCase = new GetTelemarketingDonations(
      prismaTelemarketingRepository
    );

    const { telemarketingId } = req.params;
    const { start: startDate, end: endDate } =
      req.query as unknown as GetDonationsParams;

    const { endDate: end, startDate: start } = formatDatePeriod({
      startDate,
      endDate,
    });

    const donations = await getDonatorDonationsUseCase.execute({
      telemarketingId,
      end,
      start,
    });

    const total = donations.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);

    res.json({
      data: {
        total,
        donations,
      },
    });
  }
);

export { routes };

