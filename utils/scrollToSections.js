export function scrollTo (id) {
  var ele = document.getElementById(id)
  const option = {
    top: ele.offsetTop - 130,
    left: ele.offsetLeft,
    behavior: 'smooth'
  }
  window.scrollTo(option)
  return false
}
