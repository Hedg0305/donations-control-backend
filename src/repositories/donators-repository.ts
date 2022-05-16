export interface DonatorCreateData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface DonatorsRepository {
  create: (data: DonatorCreateData) => Promise<void>;
}

