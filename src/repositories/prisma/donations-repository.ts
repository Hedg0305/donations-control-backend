import { prisma } from "../../prisma";
import {
  DonationsRepository,
  DonationCreateData,
} from "@repositories/donations-repository";

export class PrismaDonationsRepository implements DonationsRepository {
  async create(data: DonationCreateData) {
    await prisma.donation.create({
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }
}

