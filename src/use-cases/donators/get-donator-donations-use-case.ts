import { DonatorsRepository } from "@repositories/donators-repository";
import { AppError } from "@shared/errors/AppError";

interface DonatorData {
  donatorId: string;
}

export class GetDonatorDonationsUseCase {
  constructor(private donatorsRepository: DonatorsRepository) {}

  async execute({ donatorId }: DonatorData) {
    if (!donatorId) {
      throw new AppError("Please, provide all the required data!");
    }
    try {
      return await this.donatorsRepository.getDonations(donatorId);
    } catch (e) {
      throw new AppError("Donator not found");
    }
  }
}

