export interface DonationCreateData {
  donatorId: string;
  courierId?: string;
  telemarketerId?: string;
  amount: number;
  date: Date;
}

export interface DonationsRepository {
  create: (data: DonationCreateData) => Promise<void>;
}
export interface DonationData {
  donatorId: string;
  courierId: string | null;
  telemarketingId: string | null;
  amount: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

