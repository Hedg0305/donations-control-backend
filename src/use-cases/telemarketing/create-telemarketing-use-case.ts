import { TelemarketingRepository } from "@repositories/telemarketing-repository";
import { AppError } from "@shared/errors/AppError";

interface TelemarketingData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export class CreateTelemarketingUseCase {
  constructor(private telemarketingRepository: TelemarketingRepository) {}

  async execute({ address, email, name, phone }: TelemarketingData) {
    if (!name || !email || !phone || !address) {
      throw new AppError("Please, provide all the required data!");
    }

    await this.telemarketingRepository.create({
      address,
      email,
      name,
      phone,
    });
  }
}

