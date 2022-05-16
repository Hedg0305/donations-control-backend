export interface WorkerCreateData {
  name: string;
  email: string;
  phone: string;
  address: string;
  role: "TELEMARKETING" | "COURIER";
}

export interface WorkerRepository {
  create: (data: WorkerCreateData) => Promise<void>;
}

