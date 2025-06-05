import { format, isSameDay } from "date-fns";
export const time = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const sameDay = isSameDay(start, end);
  const timeRange = sameDay
    ? ` ${format(start, "EEEE, MMM d")}, ${format(start, "HH:mm")} - ${format(
        end,
        "HH:mm"
      )}`
    : ` ${format(start, "EEEE, MMM d")}, ${format(start, "HH:mm")}\n- ${format(
        end,
        "EEEE, MMM d"
      )},  ${format(end, "HH:mm")}`;
  return timeRange;
};
export const localTime = () => {
  const now = new Date();
  const difToUTC = now.getTimezoneOffset();
  const local = now.getTime() - difToUTC * 60 * 1000;
  return new Date(local).toISOString().slice(0, 16);
};
