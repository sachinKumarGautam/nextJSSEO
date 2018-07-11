export const formatDateWithMonth = (date) => {
  let formattedDate = new Date(date),
    monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ],
    day = formattedDate.getDate(),
    monthIndex = formattedDate.getMonth(),
    year = formattedDate.getFullYear()

  formattedDate = day + ' ' + monthNames[monthIndex] + ' ' + year
  return formattedDate
}

export const formatDate = (date) => {
  let formattedDate= new Date(date);
  formattedDate = formattedDate.getFullYear() + "/" + ("0" + (formattedDate.getMonth() + 1)).slice(-2) + "/" + ("0" + formattedDate.getDate()).slice(-2);
  return formattedDate;
}
