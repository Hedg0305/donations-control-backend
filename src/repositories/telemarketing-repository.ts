import { DonationData } from "./donations-repository";

export interface TelemarketingCreateData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface TelemarketingGetDonationsData {
  start: string;
  end: string;
  telemarketingId: string;
}

export interface TelemarketingRepository {
  create: (data: TelemarketingCreateData) => Promise<void>;
  getDonations: ({
    end,
    start,
    telemarketingId,
  }: TelemarketingGetDonationsData) => Promise<DonationData[]>;
}

