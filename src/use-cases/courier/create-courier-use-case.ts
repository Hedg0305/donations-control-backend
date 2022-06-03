import { CourierRepository } from "@repositories/courier-repository";
import { AppError } from "@shared/errors/AppError";

interface CourierData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export class CreateCourierUseCase {
  constructor(private courierRepository: CourierRepository) {}

  async execute({ address, email, name, phone }: CourierData) {
    if (!name || !email || !phone || !address) {
      throw new AppError("Please, provide all the required data!");
    }

    await this.courierRepository.create({
      address,
      email,
      name,
      phone,
    });
  }
}

