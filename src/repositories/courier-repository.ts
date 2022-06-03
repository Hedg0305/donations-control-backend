import { DonationCreateData, DonationData } from "./donations-repository";

export interface CourierCreateData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface CourierGetDonationsData {
  start: string;
  end: string;
  courierId: string;
}

export interface CourierRepository {
  create: (data: CourierCreateData) => Promise<void>;
  getDonations: ({
    end,
    start,
    courierId,
  }: CourierGetDonationsData) => Promise<DonationData[]>;
}

