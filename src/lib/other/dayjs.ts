import dayjs from "dayjs";
import "dayjs/locale/es-mx";

dayjs.locale("es-mx");

export function literalDate(dateString: string): string {
  return dayjs(dateString).format("DD [de] MMMM [de] YYYY");
}

export function literalDateTime(dateString: string): string {
  return dayjs(dateString).format("DD [de] MMMM [de] YYYY, HH:mm");
}
