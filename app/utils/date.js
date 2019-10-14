export function getFormattedDate(date) {
  let currDate = date;
  if (typeof currDate === 'number') {
    currDate = new Date(currDate);
  }
  const year = currDate.getFullYear();
  const month = (1 + currDate.getMonth()).toString().padStart(2, '0');
  const day = currDate.getDate().toString().padStart(2, '0');
  const hour = currDate.getHours();
  const minute = currDate.getMinutes();

  return `${month}/${day}/${year} ${hour}:${minute}`;
}
