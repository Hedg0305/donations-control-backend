import { prisma } from "prisma";
import { DonatorsRepository, DonatorCreateData } from '@repositories/donators-repository';

export class PrismaDonatorsRepository implements DonatorsRepository {
  async create(data: DonatorCreateData) {
    await prisma.donator.create({
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }
}
