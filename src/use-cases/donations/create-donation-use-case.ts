import { DonationsRepository } from "@repositories/donations-repository";
import { AppError } from "../../shared/errors/AppError";

export interface DonationData {
  donatorId: string;
  courierId: string;
  telemarketingId: string;
  amount: number;
  date: Date;
}

export class CreateDonationUseCase {
  constructor(private donationsRepository: DonationsRepository) {}

  async execute({
    donatorId,
    courierId,
    amount,
    date,
    telemarketingId,
  }: DonationData) {
    if (!donatorId || !courierId || !amount || !date || !telemarketingId) {
      throw new AppError("Please, provide all the required data!");
    }

    await this.donationsRepository.create({
      donatorId,
      courierId,
      telemarketingId,
      amount,
      date,
    });
  }
}

