import { formatISO, startOfMonth } from "date-fns";

interface FormatDatePeriodProps {
  startDate: string;
  endDate: string;
}

export function formatDatePeriod({
  startDate,
  endDate,
}: FormatDatePeriodProps) {
  //If startDate and endDate are not provided, use the first day of the month until now
  if (!startDate && !endDate) {
    startDate = formatISO(startOfMonth(new Date()));
    endDate = formatISO(new Date());
  }

  //If start is not defined, set it to the last month from the ending date
  if (!startDate && endDate) {
    startDate = formatISO(startOfMonth(new Date(String(endDate))));
  }

  //If end is not defined, set it to the current date
  if (!endDate) {
    endDate = formatISO(new Date());
  }

  return { startDate, endDate };
}

