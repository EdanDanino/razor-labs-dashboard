export function formatDateToDayMonth(date: Date) {
  return date
    .toLocaleDateString("en-US", { day: "2-digit", month: "short" })
    .replace(",", "");
}

export function formatToDDMMYYY(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export function formatDate(date: Date) {
  return date.toISOString().replace("T", " ").substring(0, 19);
}
