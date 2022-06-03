import { prisma } from "../../prisma";
import {
  TelemarketingCreateData,
  TelemarketingGetDonationsData,
  TelemarketingRepository,
} from "../telemarketing-repository";

export class PrismaTelemarketingRepository implements TelemarketingRepository {
  async create(data: TelemarketingCreateData) {
    await prisma.telemarketing.create({
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }

  async getDonations({
    end,
    start,
    telemarketingId,
  }: TelemarketingGetDonationsData) {
    return await prisma.donation.findMany({
      where: {
        telemarketingId,
        date: {
          gte: start,
          lte: end,
        },
      },
    });
  }
}

