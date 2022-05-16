import { WorkerRepository } from "../../repositories/workers-repository";
import { AppError } from "../../shared/errors/AppError";

interface WorkerData {
  name: string;
  email: string;
  phone: string;
  address: string;
  role: "TELEMARKETING" | "COURIER";
}

export class CreateWorkerUseCase {
  constructor(private workerRepository: WorkerRepository) {}

  async execute({ address, email, name, phone, role }: WorkerData) {
    if (!name || !email || !phone || !address || !role) {
      throw new AppError("Please, provide all the required data!");
    }

    await this.workerRepository.create({
      address,
      email,
      name,
      phone,
      role,
    });
  }
}

