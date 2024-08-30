export const getFormatDate = () => {
  const currentDate = new Date();
  const yyyy = currentDate.getFullYear();
  const mm = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const dd = String(currentDate.getDate()).padStart(2, "0");
  const HH = String(currentDate.getHours()).padStart(2, "0");
  const mmSS = String(currentDate.getMinutes()).padStart(2, "0");
  const ss = String(currentDate.getSeconds()).padStart(2, "0");

  return `${yyyy}${mm}${dd}${HH}${mmSS}${ss}`;
};
