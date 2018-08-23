export const formatDateWithMonth = (date) => {
  let formattedDate = new Date(date)
  let monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ]
  let day = formattedDate.getDate()
  let monthIndex = formattedDate.getMonth()
  let year = formattedDate.getFullYear()

  formattedDate = day + ' ' + monthNames[monthIndex] + ' ' + year
  return formattedDate
}

export const formatDate = (date) => {
  let formattedDate = new Date(date)
  formattedDate = ('0' + formattedDate.getDate()).slice(-2) + '/' + ('0' + (formattedDate.getMonth() + 1)).slice(-2) + '/' + formattedDate.getFullYear()
  return formattedDate
}
