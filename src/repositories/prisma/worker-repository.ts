import { prisma } from "../../prisma";
import { WorkerCreateData, WorkerRepository } from "../workers-repository";

export class PrismaWorkerRepository implements WorkerRepository {
  async create(data: WorkerCreateData) {
    await prisma.worker.create({
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }
}

