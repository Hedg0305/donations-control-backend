import { prisma } from "../../prisma";
import {
  CourierCreateData,
  CourierGetDonationsData,
  CourierRepository,
} from "../courier-repository";

export class PrismaCourierRepository implements CourierRepository {
  async create(data: CourierCreateData) {
    await prisma.courier.create({
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }

  async getDonations({ end, start, courierId }: CourierGetDonationsData) {
    return await prisma.donation.findMany({
      where: {
        courierId,
        date: {
          gte: start,
          lte: end,
        },
      },
    });
  }
}

