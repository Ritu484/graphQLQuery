import { format, parseISO } from "date-fns";

export const formatDate = (date: string) => {
 // return date
  return format(parseISO(date), `yyyy/MM/dd`).toString();
};
