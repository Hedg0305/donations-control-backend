import { WorkerRepository } from "@repositories/workers-repository";
import { AppError } from "@shared/errors/AppError";

interface WorkerData {
  workerId: string;
  end: string;
  start: string;
}

export class GetWorkerDonations {
  constructor(private workerRepository: WorkerRepository) {}

  async execute({ workerId, end, start }: WorkerData) {
    if (!workerId) {
      throw new AppError("Please, provide all the required data!");
    }

    return await this.workerRepository.getDonations({ end, start, workerId });
  }
}

