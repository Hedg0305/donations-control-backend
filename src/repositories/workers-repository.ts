import { DonationCreateData } from "./donations-repository";

export interface WorkerCreateData {
  name: string;
  email: string;
  phone: string;
  address: string;
  role: "TELEMARKETING" | "COURIER";
}

export interface WorkerGetDonationsData {
  start: string;
  end: string;
  workerId: string;
}

export interface WorkerRepository {
  create: (data: WorkerCreateData) => Promise<void>;
  getDonations: ({
    end,
    start,
    workerId,
  }: WorkerGetDonationsData) => Promise<DonationCreateData[]>;
}

