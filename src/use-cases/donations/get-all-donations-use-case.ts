import { DonationsRepository } from "@repositories/donations-repository";

export class GetAllDonationUseCase {
  constructor(private donationsRepository: DonationsRepository) {}

  async execute() {
    return await this.donationsRepository.getAllDonations();
  }
}

