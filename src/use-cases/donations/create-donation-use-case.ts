import { DonationsRepository } from "@repositories/donations-repository";
import { AppError } from "../../shared/errors/AppError";

export interface DonationData {
  donatorId: string;
  workerId: string;
  amount: number;
  date: Date;
}

export class CreateDonationUseCase {
  constructor(private donationsRepository: DonationsRepository) {}

  async execute({ donatorId, workerId, amount, date }: DonationData) {
    if (!donatorId || !workerId || !amount || !date) {
      throw new AppError("Please, provide all the required data!");
    }

    await this.donationsRepository.create({
      donatorId,
      workerId,
      amount,
      date,
    });
  }
}

