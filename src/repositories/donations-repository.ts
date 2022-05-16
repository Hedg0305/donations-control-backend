export interface DonationCreateData {
  donatorId: string;
  workerId: string;
  amount: number;
  date: Date;
}

export interface DonationsRepository {
  create: (data: DonationCreateData) => Promise<void>;
}

