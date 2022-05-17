import { DonatorsRepository } from "@repositories/donators-repository";
import { AppError } from "@shared/errors/AppError";

export interface DonatorData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export class CreateDonatorUseCase {
  constructor(private donatorsRepository: DonatorsRepository) {}

  async execute({ name, email, phone, address }: DonatorData) {
    if (!name || !email || !phone || !address) {
      throw new AppError("Please, provide all the required data!");
    }
    try{
    await this.donatorsRepository.create({
      name,
      email,
      phone,
      address,
    });
    } catch(e){
      throw new AppError("Error");
    }
  }
}

