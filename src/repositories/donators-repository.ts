import { DonationCreateData, DonationData } from "./donations-repository";

export interface DonatorCreateData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface DonatorsRepository {
  create: (data: DonatorCreateData) => Promise<void>;
  getDonations: (workerId: string) => Promise<DonationData[]>;
}

