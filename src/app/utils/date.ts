import { parseISO, format } from "date-fns";

export function formatDate(dateString: string, formatStr: string): string {
  const date = parseISO(dateString);
  return format(date, formatStr);
}
