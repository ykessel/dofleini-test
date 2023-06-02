export function getDate(dateString: string):string {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  });
  return formattedDate;
}

export function getTime(dateString: string):string {
  const date = new Date(dateString);
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });
  return time.split(" ")[0];
}
