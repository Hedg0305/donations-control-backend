import { TelemarketingRepository } from "@repositories/telemarketing-repository";
import { AppError } from "@shared/errors/AppError";

interface GetDonatiosnData {
  telemarketingId: string;
  end: string;
  start: string;
}

export class GetTelemarketingDonations {
  constructor(private telemarketingRepository: TelemarketingRepository) {}

  async execute({ telemarketingId, end, start }: GetDonatiosnData) {
    if (!telemarketingId) {
      throw new AppError("Please, provide all the required data!");
    }

    return await this.telemarketingRepository.getDonations({
      end,
      start,
      telemarketingId,
    });
  }
}

