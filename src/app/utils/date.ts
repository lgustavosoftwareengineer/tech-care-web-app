import { parse, format } from "date-fns";

function isValidDateFormat(dateString: string): boolean {
  const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  return regex.test(dateString);
}

export function formatDate(dateString: string, formatStr: string): string {
  const isValidDate = isValidDateFormat(dateString);

  const date = parse(
    dateString,
    isValidDate ? "yyyy-MM-dd" : "MM/dd/yyyy",
    new Date()
  );

  return format(date, formatStr);
}
