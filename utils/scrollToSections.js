export function scrollTo (id, heightToRemove) {
  var ele = document.getElementById(id)
  const option = {
    top: ele.offsetTop - heightToRemove,
    left: ele.offsetLeft,
    behavior: 'smooth'
  }
  window.scrollTo(option)
  return false
}
