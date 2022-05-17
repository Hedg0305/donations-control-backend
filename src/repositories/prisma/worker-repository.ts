import { prisma } from "../../prisma";
import {
  WorkerCreateData,
  WorkerGetDonationsData,
  WorkerRepository,
} from "../workers-repository";

export class PrismaWorkerRepository implements WorkerRepository {
  async create(data: WorkerCreateData) {
    await prisma.worker.create({
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }

  async getDonations({ end, start, workerId }: WorkerGetDonationsData) {
    return await prisma.donation.findMany({
      where: {
        workerId,
        date: {
          gte: start,
          lte: end,
        },
      },
    });
  }
}

