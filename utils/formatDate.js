export default function convertDate(dateString) {
  const year = dateString.slice(0, 4);
  const month = dateString.slice(5, 7);
  const day = dateString.slice(8, 11);

  return `${day}-${month}-${year}`;
}
