import { prisma } from "prisma";
import { DonationData } from "../donations-repository";
import {
  DonatorsRepository,
  DonatorCreateData,
} from "@repositories/donators-repository";

export class PrismaDonatorsRepository implements DonatorsRepository {
  async create(data: DonatorCreateData) {
    await prisma.donator.create({
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }

  async getDonations(donatorId: string): Promise<DonationData[]> {
    return await prisma.donation.findMany({
      where: {
        donatorId,
      },
    });
  }
}

