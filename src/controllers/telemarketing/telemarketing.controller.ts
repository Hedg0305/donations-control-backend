import { PrismaTelemarketingRepository } from "@repositories/prisma/telemarketing-repository";
import { CreateTelemarketingUseCase } from "@use-cases/telemarketing/create-telemarketing-use-case";
import { GetTelemarketingDonations } from "@use-cases/telemarketing/get-telemarketing-donations-use-case";
import { formatDatePeriod } from "@utils/formatDatePeriod";
import { Request, Response } from "express";

interface GetDonationsParams {
  start: string;
  end: string;
}

const createTelemarketing = (req: Request, res: Response) => {
  const prismaTelemarketingRepository = new PrismaTelemarketingRepository();
  const cretateCourierUseCase = new CreateTelemarketingUseCase(
    prismaTelemarketingRepository
  );

  const { address, email, name, phone } = req.body;

  cretateCourierUseCase.execute({ address, email, name, phone });
  cretateCourierUseCase;
  res.send("Hello from worker");
};

const getTelemarketingDonations = async (req: Request, res: Response) => {
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
};

export default { createTelemarketing };

