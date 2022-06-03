import { PrismaCourierRepository } from "@repositories/prisma/courier-repository";
import { CreateCourierUseCase } from "@use-cases/courier/create-courier-use-case";
import { GetCourierDonations } from "@use-cases/courier/get-courier-donations-use-case";
import { formatDatePeriod } from "@utils/formatDatePeriod";
import { Request, Response } from "express";

interface GetDonationsParams {
  start: string;
  end: string;
}

const createCourier = (req: Request, res: Response) => {
  const prismaCourierRepository = new PrismaCourierRepository();
  const cretateCourierUseCase = new CreateCourierUseCase(
    prismaCourierRepository
  );

  const { address, email, name, phone } = req.body;

  cretateCourierUseCase.execute({ address, email, name, phone });

  res.send("Courier created");
};

const getCourierDonations = async (req: Request, res: Response) => {
  const prismaCourierRepository = new PrismaCourierRepository();
  const getDonatorDonationsUseCase = new GetCourierDonations(
    prismaCourierRepository
  );

  const { courierId } = req.params;
  const { start: startDate, end: endDate } =
    req.query as unknown as GetDonationsParams;

  const { endDate: end, startDate: start } = formatDatePeriod({
    startDate,
    endDate,
  });

  const donations = await getDonatorDonationsUseCase.execute({
    courierId,
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

export default { getCourierDonations, createCourier };

