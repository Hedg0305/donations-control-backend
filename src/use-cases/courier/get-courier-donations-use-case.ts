import { CourierRepository } from "@repositories/courier-repository";
import { AppError } from "@shared/errors/AppError";

interface Courier {
  courierId: string;
  end: string;
  start: string;
}

export class GetCourierDonations {
  constructor(private courierRepository: CourierRepository) {}

  async execute({ courierId, end, start }: Courier) {
    if (!courierId) {
      throw new AppError("Please, provide all the required data!");
    }

    return await this.courierRepository.getDonations({ end, start, courierId });
  }
}

